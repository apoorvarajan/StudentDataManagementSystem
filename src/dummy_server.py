from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import yaml
from pathlib import Path
import pandas as pd
import logging
import jwt
from dotenv import load_dotenv
import os

from server.password_auth import hash_password, check_password, validate_password
from server.course import CourseInstance, CourseClass, Course
from server.department import Department
from server.auth_token import AuthToken
from server.resources import *
from server.semester import Semester, Season
from server.user import Faculty, Student

DATA_ROOT = Path('/workspaces/StudentDataManagementSystem/data/')

class UserNotFoundError(Exception):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not found'
        super().__init__(msg, *args, **kwargs)

class UnauthorizedError(Exception):
    pass

class InvalidPasswordError(Exception):
    pass

def get_user(db_name:str, collection_name:str, username:str):
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[db_name]
        collection = db[collection_name]

        # find the user with the given username in the collection
        data = collection.find_one({'username': username})
        if data is None:
            raise UserNotFoundError(username)
        return data

def refresh_collection(db_name:str, collection_name:str, df_filename:str|Path):
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[db_name]
        collection = db[collection_name]
        collection.drop()

        df : pd.DataFrame = pd.read_json(DATA_ROOT.joinpath(df_filename), lines=True)
        # df : pd.DataFrame = pd.read_csv(DATA_ROOT.joinpath(df_filename))
        df.password = df.password.apply(hash_password)
        df = df.to_dict('records')

        # create a new collection and set username as unique
        collection.create_index('username', unique=True)

        # print(df)
        # return 

        # insert the data into the collection
        collection.insert_many(df)

        logging.info('Refreshed users collection')

def authenticate(db_name:str, collection_name:str,
        username:str, password:str, role_type:str
    )->str:

    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        user_data = get_user(db_name, collection_name, username)

        saved_pwd = user_data['password']
        authenticated = check_password(password, saved_pwd)

        if not authenticated:
            raise InvalidPasswordError()

        if role_type not in user_data['roles']:
            raise UnauthorizedError()

        print(f'Authenticated. Full name: {user_data["fullname"]}')
        return jwt.encode({'username': username, 'role':role_type}, 'secret', algorithm='HS256')

def reset_password(db_name:str, collection_name:str,
        username:str, password:str
    ):

    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        
        # verifty the user exists
        get_user(db_name, collection_name, username)
        
        # update the password
        db = client[db_name]
        collection = db[collection_name]
        collection.update_one(
            {'username': username}, 
            {'$set': {'password': hash_password(password)}}
        )

        # check if the password is updated
        user_data = get_user(db_name, collection_name, username)
        saved_pwd = user_data['password']
        authenticated = check_password(password, saved_pwd)
        if authenticated:
            print('Password updated')
        else:
            print('Password not updated')

def update_course_grade(db_name:str, student_id:str,
        auth_token_str:str, course:CourseInstance, payload:dict):
    
    # Authorize the user
    token = AuthToken(auth_token_str)
    resource = StudentGradeResource(student_id, course)

    if not token.role.can_read(resource):
        raise UnauthorizedError()
    
    if not token.role.can_write(resource):
        raise UnauthorizedError()
    
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        # Update the course grade
        db = client[db_name]
        collection = db[course.course_code]
        collection.update_one(
            {'username': payload['username']}, 
            {'$set': {'grade': payload['grade']}},
            upsert=True
        )

        print(f'Updated grade for {payload["username"]}')

def view_course_grade(db_name:str, student_id:str,
        auth_token_str:str, course:CourseInstance, payload:dict):
    
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        # Authorize the user
        token = AuthToken(auth_token_str)
        resource = StudentGradeResource(student_id, course)

        if not token.role.can_read(resource):
            raise UnauthorizedError()

        # if not token.role.can_write(resource):
        #     raise UnauthorizedError()

        # Update the course grade
        db = client[db_name]
        collection = db[course.course_code]
        data = collection.find_one({'username': payload['username']})

        print(f'Grade for {payload["username"]}: {data["grade"]}')

def get_student(db_name:str, collection_name:str,
        username:str, auth_token_str:str):
    
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:
    
        # Authorize the user
        token = AuthToken(auth_token_str)
        data = get_user(db_name, collection_name, username)
        resource = UserResource(data)

        if not token.role.can_read(resource):
            raise UnauthorizedError()
        
        return Student(
            data['username'],
            **data
        )

def get_course(db_name:str, dept_code:str, course_code:str, auth_token_str:str):
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[db_name]
        course_coll = db['course_details']
        dept_coll = db['departments']
        print(dept_code, course_code)
        course_data = course_coll.find_one(
            {'department': dept_code, 'course_number': course_code})
        # cd = course_coll.find_one()
        # print(cd)
        dept_data = dept_coll.find_one({'_id': dept_code})
        resource = CourseResource(dept_data, course_data)
        token = AuthToken(auth_token_str)

        if not token.role.can_read(resource):
            raise UnauthorizedError()
        
        return Course(**course_data)
    
def get_course_instance(db_name:str, dept_code:str, course_code:str, auth_token_str:str):
    course = get_course(db_name, dept_code, course_code, auth_token_str)
    season = getattr(Season, os.getenv('CURR_SEASON').upper())
    semester = Semester(season, os.getenv('CURR_YEAR'))

    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[db_name]
        course_inst_coll = db['course_data']
        course_inst_data = course_inst_coll.find_one(
            {'department': dept_code, 'course_number': course_code})
        
        resource = CourseInstanceResource(course_inst_data)
        token = AuthToken(auth_token_str)
        
        if not token.role.can_read(resource):
            raise UnauthorizedError()
        
        return CourseInstance(course, semester, **course_inst_data)

def get_course_details(client:MongoClient, db_name:str, collection_name:str,
        course_code:str, student:Student):
    ...


def main():
    # with open(DATA_ROOT.joinpath('credentials.yml'), 'r') as f:
    #     credentials = yaml.safe_load(f)
    #     uri = credentials['base_uri'].format(**credentials)

    load_dotenv()

    print(os.getenv('MONGO_URI'))

    # Create a new client and connect to the server
    client = MongoClient(
        os.getenv('MONGO_URI'),
        server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER')))

    # Send a ping to confirm a successful connection
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    token = authenticate('sdms', 'users', 'fcowboy', 'passw0rd', 'instructor')
    token_stu = authenticate('sdms', 'users', 'bob123', 'aaaa', 'student')
    student = get_student('sdms', 'users', 'bob123', token_stu)
    # stu_from_inst = get_student('sdms', 'users', 'bob123', token)
    # dept = Department('COMPSCI', 'Computer Science', None)
    # course = Course(dept, '520', 'Software Engineering', 3, ['UGRAD', 'GRAD'])
    # semester = Semester('Fall', 2023)
    # instructor = Faculty('tommy', 'Tommy', 'Lee', 'Jones', None, None, None, dept, None)
    # course_instance = CourseInstance(course, semester, [instructor])
    # course_class = CourseClass(course_instance, '20145', 50, 'GRAD', False)
    # course_class = CourseClass(course, '20145', 'GRAD', False)
    # course_instance = CourseInstance(course_class, semester, 50, [instructor])
    # student = Student('bob123', 'Bob', None, 'Smith', None, None, 'UGRAD', 2019, 2023, 'BS', 'CS', None, None, dept, None)
    course_instance = get_course_instance('academics', 'COMPSCI', '520', token)


    # update_course_grade('sdms', stu_from_inst, token, course_instance, {'username': 'bob123', 'grade': 3.0})
    # view_course_grade('sdms', student, token_stu, course_instance, {'username': 'bob123'})

    # refresh_collection('sdms', 'users', 'dummy_users.jsonl')
    # reset_password(client, 'sdms', 'users', 'tommy', '2t0mmy') 

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    main()
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import yaml
from pathlib import Path
import pandas as pd
import logging
import jwt
from dotenv import load_dotenv
import os
import json
from bson import Decimal128

from server.password_auth import hash_password, check_password, validate_password
from server.course import CourseInstance, CourseClass, Course
from server.department import Department
from server.auth_token import AuthToken
# from server.resources import *
from server.semester import Semester, Season
from server.user import Faculty, Student

DATA_ROOT = Path('/workspaces/StudentDataManagementSystem/data/')

class UserNotFoundError(Exception):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not found'
        super().__init__(msg, *args, **kwargs)

class FieldNotFoundError(Exception):
    def __init__(self, field:str, *args, **kwargs):
        msg = f'Field `{field}` not found'
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
    # resource = StudentGradeResource(student_id, course)

    # if not token.role.can_read(resource):
    #     raise UnauthorizedError()
    
    # if not token.role.can_write(resource):
    #     raise UnauthorizedError()
    
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

def get_student(db_name:str, collection_name:str,
        username:str, auth_token_str:str):
    
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:
    
        # Authorize the user
        token = AuthToken(auth_token_str)
        data = get_user(db_name, collection_name, username)
        # resource = UserResource(data)

        # if not token.role.can_read(resource):
        #     raise UnauthorizedError()
        
        return Student(
            data['username'],
            **data
        )


def get_course_grade(student_id:str,
        course_code: str, payload:dict, auth_token_str:str):
    """Get the grade for a student in a course

    Args:
        student_id (str): Role of the user
        course_code (str): Must be in the format of "DEPT_CODE COURSE_NUMBER"
        payload (dict): _description_
        auth_token_str (str): A valid auth token string

    Raises:
        UserNotFoundError: If the user is not found in the database
    
    Returns:
        _type_: str   
    """
    
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:
        
        try:
            db = client[os.getenv('ACADEMICS_DB')]
            collection = db[os.getenv('CURR_COURSES_COLL')]
            filter_condition = {'department': course_code.split(" ")[0], 
                                'course_number': course_code.split()[1]}
            doc = collection.find_one(filter_condition)
            stu_grade = doc['students'][payload['username']]['course_grade']
            print(f'Grade for {payload["username"]}: {stu_grade}') 
        except:
            raise UserNotFoundError(payload['username'])
        
    return stu_grade
 
def get_course(course_code:str, auth_token_str:str):
    """Get all the courses in a department

    Args:
        course_code (str): Must be in the format of "DEPT_CODE COURSE_NUMBER"
        auth_token_str (str): A valid auth token string

    Returns:
        _type_: list of dict
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('ALL_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0]}
        projection = {"_id": 0} #exclude id
        dept_courses = list(collection.find(filter_condition, projection))

    return dept_courses
        
def get_course_instance(course_code:str, auth_token_str:str):
    """ Get the course instance details for the current semester

    Args:
        course_code (str): Must be in the format of "DEPT_CODE COURSE_NUMBER"
        auth_token_str (str): A valid auth token string

    Returns:
        _type_: dict
    """
    # course = get_course(db_name, dept_code, course_code, auth_token_str)
    # season = getattr(Season, os.getenv('CURR_SEASON').upper())
    # semester = Semester(season, os.getenv('CURR_YEAR'))

    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('CURR_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0], 
                            'course_number': course_code.split()[1]}

        projection = {"_id": 0, "instructors": 1, "exam_details": 1, "department": 1, 
                      "grade_threshold": 1, "course_number": 1, 
                      "sections": 1, "teaching_assistants": 1}
        course_inst = collection.find_one(filter_condition, projection)
    
    return course_inst
        
def requirement_calc():
    pass

def set_personal_details(payload:dict, details:dict, auth_token_str:str):
    """Set the personal details for a user

    Args:
        payload (dict): _description_
        details (dict): personal details to be updated
        auth_token_str (str): A valid auth token string
    
    Returns:
        _type_: bool
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('USERS_DB')]
        collection = db[os.getenv('USERS_COLL')]
        
    return True

def get_personal_details(payload:dict, auth_token_str:str):
    pass

def set_grade(grades:dict, course_code: str, payload:dict, auth_token_str:str):
    """Set grades for all students in a course

    Args:
        grades (dict): Grades for all students in the course
        course_code (str): It must be in the format of "DEPT_CODE COURSE_NUMBER"
        payload (dict): _description_
        auth_token_str (str): A valid auth token string

    Raises:
        UserNotFoundError: If the user is not found in the database

    Returns:
        _type_: bool
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('CURR_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0], 
                            'course_number': course_code.split()[1]}
        doc = collection.find_one(filter_condition)
        students = doc['students']
        for id in grades.keys():
            if id in students.keys():
                students[id]['course_grade'] = grades[id]
                collection.update_one(filter_condition, {'$set': {'students': students}})
            else:
                raise UserNotFoundError(id)
    return True

def set_marks(marks:dict, exam:str, course_code:str, payload:dict, auth_token_str:str):
    """Set marks for an exam

    Args:
        marks (dict): Marks for all students in the course
        exam (str): Exam name
        course_code (str): It must be in the format of "DEPT_CODE COURSE_NUMBER"
        payload (dict): _description_
        auth_token_str (str): A valid auth token string

    Raises:
        UserNotFoundError: If the user is not found in the database

    Returns:
        _type_: bool
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('CURR_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0], 
                            'course_number': course_code.split()[1]}
        doc = collection.find_one(filter_condition)
        students = doc['students']
        for id in marks.keys():
            if id in students.keys():
                students[id]['test_scores'][exam] = Decimal128(str(marks[id]))
                collection.update_one(filter_condition, {'$set': {'students': students}})
            else:
                raise UserNotFoundError(id)
    return True

def set_course_instance(course_info:dict, course_code:str, payload:dict, auth_token_str:str):
    """For instructors to set course details for the current semester

    Args:
        course_info (dict): Course details to be updated
        course_code (str): It must be in the format of "DEPT_CODE COURSE_NUMBER"
        payload (dict): _description_
        auth_token_str (str): A valid auth token string

    Returns:
        _type_: bool
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('CURR_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0], 
                            'course_number': course_code.split()[1]}
        doc = collection.find_one(filter_condition)

        collection.update_one(filter_condition, {'$set': course_info})
    return True


def set_course(course_info:dict, course_code:str, payload:dict, auth_token_str:str):
    """For admins to set course details

    Args:
        course_info (dict): Course details to be updated
        course_code (str): It must be in the format of "DEPT_CODE COURSE_NUMBER"
        payload (dict): _description_
        auth_token_str (str): A valid auth token string

    Returns:
        _type_: bool
    """
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('ALL_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0],
                            'course_number': course_code.split()[1]}
        doc = collection.find_one(filter_condition)

        collection.update_one(filter_condition, {'$set': course_info})
    return True

def create_user(user_info:dict, auth_token_str:str):
    with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

        db = client[os.getenv('ACADEMICS_DB')]
        collection = db[os.getenv('CURR_COURSES_COLL')]
        filter_condition = {'department': course_code.split(" ")[0], 
                            'course_number': course_code.split()[1]}
        doc = collection.find_one(filter_condition)
        students = doc['students']
        for id in marks.keys():
            if id in students.keys():
                students[id]['test_scores'][exam] = Decimal128(str(marks[id]))
                collection.update_one(filter_condition, {'$set': {'students': students}})
            else:
                raise UserNotFoundError(id)
    return True




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
    # course_instance = get_course_instance('academics', 'COMPSCI', '520', token)


    # update_course_grade('sdms', stu_from_inst, token, course_instance, {'username': 'bob123', 'grade': 3.0})
    # refresh_collection('sdms', 'users', 'dummy_users.jsonl')
    # reset_password(client, 'sdms', 'users', 'tommy', '2t0mmy') 
    # ------
    # get_course_grade(student, "COMPSCI 520", {'username': 'bob123'}, token_stu)
    # get_course_instance('COMPSCI 520', token_stu)
    # get_course("COMPSCI 520", token_stu)
    # set_grade({'bob123': 'A'}, "COMPSCI 520", {'username': 'fcowboy'}, token)
    # set_marks({'bob123': 100}, 'exam1', "COMPSCI 520", {'username': 'fcowboy'}, token)
    # set_course_instance({'description': 'Introduces students to the principal activities and state-of-the-art techniques involved in developing high-quality software systems'}, 
    #                     "COMPSCI 520", {'username': 'fcowboy'}, token)


    
    


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    main()
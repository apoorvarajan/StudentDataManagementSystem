from sdms_server.database.db import get_one_document, get_multi_documents
from sdms_server.exceptions.exceptions import *
from sdms_server.authorization.permission import *
from sdms_server.authorization.decorator import permissions_required
from sdms_server.authentication.authentication import check_password
import jwt
import os
from typing import Tuple

@permissions_required(
    student=(is_self, is_enrolled_in_course),
    instructor=(is_ta_or_instructor_of_course))
def get_course_grade(auth_token_str:str, /, *, user_id:str, course_id: str)->str:
    result = get_one_document(os.getenv('ACADEMICS_DB'), os.getenv('CURR_COURSES_COLL'), 
        {'department': course_id.split()[0], 'course_number': course_id.split()[1]}, 
        {'students': 1, '_id': 0})
    if user_id not in result:
        raise StudentNotEnrolledInCourseError
    elif result is None:
        raise ValueNotFoundError('course_id')
        
    return result[user_id]['course_grade']

def get_user(auth_token_str:str, /, *, user_id:str)->dict:
    result = get_one_document(os.getenv('USERS_DB'), os.getenv('USERS_COLL'), {'username': user_id}, 
                              {'_id': 0, 'name': 1, 'email': 1, 'address': 1, 'phone': 1})

    if result is None:
        raise UserNotFoundError(user_id)
    
    return result

def get_user_cred(auth_token_str:str, /, *, user_id:str)->dict:
    result = get_one_document(os.getenv('USERS_DB'), os.getenv('USERS_COLL'), {'username': user_id}, 
                              {'_id': 0, 'password': 1, 'name': 1, 'roles': 1})

    if result is None:
        raise UserNotFoundError(user_id)
    
    return result

def get_student(auth_token_str:str, /, *, user_id:str)->dict:
    result = get_one_document(os.getenv('USERS_DB'), os.getenv('STUDENTS_COLL'), {'username': user_id}, 
                              {'_id': 0, 'advisor': 1, 'department': 1, 'degree': 1, 'gpa': 1, 'grad_sem': 1, 'grad_year': 1})
    
    if result is None:
        raise UserNotFoundError(user_id)
    
    return result


def get_student_details(auth_token_str:str, /, *, user_id:str)->dict:
    user_details = get_user(auth_token_str, user_id=user_id)
    student_details = get_student(auth_token_str, user_id=user_id)
     
    return {**user_details, **student_details}

# def get_all_courses(auth_token_str:str, /, *, degree:str, department_id:str)->list:
#     result = get_multi_documents(os.getenv('ACADEMICS_DB'), os.getenv('ALL_COURSES_COLL'), 

def authenticate(user_id:str, password:str, role:str)->Tuple[bool, str]:
    try:
        user_data = get_user_cred(user_id=user_id)
        saved_pwd = user_data['password']
        authenticated = check_password(password, saved_pwd)

        if not authenticated:
            raise InvalidPasswordError()

        if role not in user_data['roles']:
            raise UnauthorizedError()

        print(f'Authenticated. First Name: {user_data["name"]["first_name"]}')
        return True, jwt.encode({'username': user_id, 'role':role}, os.getenv('JWT_SECRET'), algorithm=os.getenv('JWT_ALGORITHM'))

    except (InvalidPasswordError, UnauthorizedError) as e:
        return False, str(e)
    
"""Functions to check if a user has a permission
"""

from sdms_server.database.db import get_one_document

def is_enrolled_in_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in get_one_document(os.getenv('USERS_DB'), os.getenv('STUDENTS_COLL'), filter={"username": _user_id})['current_courses']
    except KeyError:
        return False

def is_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in get_one_document(os.getenv('ACADEMICS_DB'), os.getenv('CURR_COURSES_COLL'), filter={"department": course_id.split()[0], "course_number": course_id.split()[1]})['instructors']
    except KeyError:
        return False

def is_ta_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    try:
        return course_id in get_one_document(os.getenv('ACADEMICS_DB'), os.getenv('CURR_COURSES_COLL'), filter={"department": course_id.split()[0], "course_number": course_id.split()[1]})['teaching_assistants']
    except KeyError:
        return False

def is_ta_or_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    return is_instructor_of_course(_user_id, course_id=course_id) or is_ta_of_course(_user_id, course_id=course_id)

def is_self(_user_id:str, /, *, user_id:str, **_kwargs)->bool:
    return _user_id == user_id

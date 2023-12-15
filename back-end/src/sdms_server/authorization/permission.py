"""Functions to check if a user has a permission

This module contains functions that can be used to check if a user has a specific permission.
The functions in this module are used to determine if a user is enrolled in a course, if a user is an instructor of a course,
if a user is a teaching assistant of a course, if a user is either a teaching assistant or an instructor of a course,
and if a user is the same as another user.

Functions:
- is_enrolled_in_course: Checks if a user is enrolled in a specific course.
- is_instructor_of_course: Checks if a user is an instructor of a specific course.
- is_ta_of_course: Checks if a user is a teaching assistant of a specific course.
- is_ta_or_instructor_of_course: Checks if a user is either a teaching assistant or an instructor of a specific course.
- is_self: Checks if a user is the same as another user.
"""

import os
from sdms_server.database.db import get_one_document

def is_enrolled_in_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    """Checks if a user is enrolled in a specific course.

    Args:
    - _user_id: The ID of the user.
    - course_id: The ID of the course.

    Returns:
    - True if the user is enrolled in the course, False otherwise.
    """
    try:
        return course_id in get_one_document(os.getenv('USERS_DB'), os.getenv('STUDENTS_COLL'), filter={"username": _user_id})['current_courses']
    except KeyError:
        return False

def is_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    """Checks if a user is an instructor of a specific course.

    Args:
    - _user_id: The ID of the user.
    - course_id: The ID of the course.

    Returns:
    - True if the user is an instructor of the course, False otherwise.
    """
    try:
        return course_id in get_one_document(os.getenv('ACADEMICS_DB'), os.getenv('CURR_COURSES_COLL'), filter={"department": course_id.split()[0], "course_number": course_id.split()[1]})['instructors']
    except KeyError:
        return False

def is_ta_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    """Checks if a user is a teaching assistant of a specific course.

    Args:
    - _user_id: The ID of the user.
    - course_id: The ID of the course.

    Returns:
    - True if the user is a teaching assistant of the course, False otherwise.
    """
    try:
        return course_id in get_one_document(os.getenv('ACADEMICS_DB'), os.getenv('CURR_COURSES_COLL'), filter={"department": course_id.split()[0], "course_number": course_id.split()[1]})['teaching_assistants']
    except KeyError:
        return False

def is_ta_or_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    """Checks if a user is either a teaching assistant or an instructor of a specific course.

    Args:
    - _user_id: The ID of the user.
    - course_id: The ID of the course.

    Returns:
    - True if the user is either a teaching assistant or an instructor of the course, False otherwise.
    """
    return is_instructor_of_course(_user_id, course_id=course_id) or is_ta_of_course(_user_id, course_id=course_id)

def is_self(_user_id:str, /, *, user_id:str, **_kwargs)->bool:
    """Checks if a user is the same as another user.

    Args:
    - _user_id: The ID of the first user.
    - user_id: The ID of the second user.

    Returns:
    - True if the first user is the same as the second user, False otherwise.
    """
    return _user_id == user_id

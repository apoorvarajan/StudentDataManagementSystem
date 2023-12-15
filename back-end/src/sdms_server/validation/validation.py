"""Functions for validating client input.
"""

import re

def validate_user_id(user_id:str)->bool:
    """Validates user_id. Should be alphanumeric or '@' or '.'.

    Args:
        user_id: User id to validate.

    Returns:
        True if user_id is valid, False otherwise.
    """
    return re.match(r'^[a-zA-Z0-9@.]+$', user_id) is not None

def validate_role(role)->bool:
    """Validates role. Should be alphabetic.

    Args:
        role: Role to validate.

    Returns:
        True if role is valid, False otherwise.
    """
    return re.match(r'^[a-zA-Z]+$', role) is not None

def validate_course_id(course_id:str)->bool:
    """Validates course_id. Should be alphanumeric or hyphen.

    Args:
        course_id: Course id to validate.

    Returns:
        True if course_id is valid, False otherwise.
    """
    return re.match(r'^[a-zA-Z0-9-]+$', course_id) is not None

def validate_department_id(department_id:str)->bool:
    """Validates department_id. Should be alphabetic or hyphen.

    Args:
        department_id: Department id to validate.

    Returns:
        True if department_id is valid, False otherwise.
    """
    return re.match(r'^[a-zA-Z-]+$', department_id) is not None

"""Functions to check if a user has a permission
"""

from sdms_server.database.db import get_document

# Do imports here

def is_enrolled_in_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    ...

def is_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    ...

def is_ta_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    ...

def is_ta_or_instructor_of_course(_user_id:str, /, *, course_id:str, **_kwargs)->bool:
    ...

def is_self(_user_id:str, /, *, user_id:str, **_kwargs)->bool:
    return _user_id == user_id

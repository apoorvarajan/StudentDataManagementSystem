from sdms_server.database.db import get_one_document, get_multi_documents
from sdms_server.exceptions.exceptions import *
from sdms_server.authorization.permission import *
from sdms_server.authorization.decorator import permissions_required
import os
from dotenv import load_dotenv

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



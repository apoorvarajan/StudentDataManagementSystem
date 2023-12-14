from sdms_server.database.db import get_one_document, get_multi_documents

def get_course_grade(auth_token_str:str, /, *, user_id:str, course_code: str):

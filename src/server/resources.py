import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi
# from server.auth_token import AuthToken
from server.errors import UnauthorizedError

from abc import ABC, abstractmethod
from server.user import BaseUser
from server.course import CourseInstance

class BaseResource(ABC):
    @abstractmethod
    def associated_with(self, role)->bool:
        pass

    @abstractmethod
    def owner(self, role)->bool:
        pass

class StudentGradeResource(BaseResource):
    def __init__(self, student_id:str, department:str, course_number:str):
        self._student_id = student_id
        self._department = department
        self._course_number = course_number

    def associated_with(self, role)->bool:
        if role.role_type == 'student':
            return role.identifier == self._student_id

        if role.role_type == 'teaching_assistant':
            return role.identifier in [
                ta.user_id for ta in self._course.teaching_assistants]

        if role.role_type == 'instructor':
            return role.identifier in [
                instructor.user_id for instructor in self._course.instructors]

        return False

    def owner(self, role)->bool:
        if role.role_type == 'instructor':
            return role.identifier in [
                instructor.user_id for instructor in self._course.instructors]

        return False
    
    def fetch(self, auth_token_str:str, db_name:str):
        with MongoClient(
            os.getenv('MONGO_URI'), 
            server_api=ServerApi(os.getenv('MONGO_SERVER_API_VER'))
        ) as client:

            # Authorize the user
            token = AuthToken(auth_token_str)
            if not token.role.can_read(self):
                raise UnauthorizedError()

            # Update the course grade
            db = client[db_name]
            collection = db['course_data']
            data = collection.find_one(
                {'department': self._department, 'course_number': self._course_number},
                {f'students.{self._student_id}.test_scores': 1})

            print(f'Grade for {payload["username"]}: {data["grade"]}')

class UserResource(BaseResource):
    def __init__(self, user_data:dict):
        self._user_data = user_data

    def associated_with(self, role)->bool:
        return role.identifier == self._user_data['username']

    def owner(self, role)->bool:
        return role.identifier == self._user_data['username']

class CourseResource(BaseResource):
    def __init__(self, dept:dict, course:dict):
        self._dept = dept
        self._course = course

    def associated_with(self, role)->bool:
        return True

    def owner(self, role)->bool:
        if role.role_type == 'administrator':
            return True

        if role.role_type == 'instructor':
            return self._dept['dept_head']['user_id'] == role.identifier

        return False

class CourseInstanceResource(BaseResource):
    def __init__(self, course_instance:dict):
        self._course_instance = course_instance

    def associated_with(self, role)->bool:
        if role.role_type == 'student':
            return False

        if role.role_type == 'teaching_assistant':
            return role.identifier in [
                ta['username'] for ta in self._course_instance.teaching_assistants]

        if role.role_type == 'instructor':
            return role.identifier in self._course_instance['instructors']

        return False

    def owner(self, role)->bool:
        if role.role_type == 'instructor':
            return role.identifier in [
                instructor.user_id for instructor in self._course_instance.instructors]

        return False

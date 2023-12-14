class UnauthorizedError(Exception):
    """Exception raised for unauthorized access.
    """

class UserNotFoundError(Exception):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not found'
        super().__init__(msg, *args, **kwargs)

class FieldNotFoundError(Exception):
    def __init__(self, field:str, *args, **kwargs):
        msg = f'Field `{field}` not found'
        super().__init__(msg, *args, **kwargs)     

class InvalidPasswordError(Exception):
    pass

class StudentNotEnrolledInCourseError(Exception):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not enrolled in course'
        super().__init__(msg, *args, **kwargs)

class ValueNotFoundError(Exception):
    def __init__(self, value:str, *args, **kwargs):
        msg = f'Value `{value}` not found'
        super().__init__(msg, *args, **kwargs)
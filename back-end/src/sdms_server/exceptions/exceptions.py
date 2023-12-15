class BaseSDMSException(Exception):
    """Base class for other exceptions.
    """

class UnauthorizedError(BaseSDMSException):
    """Exception raised for unauthorized access.
    """
class InvalidPasswordError(BaseSDMSException):
    """Exception raised for invalid password.
    """

    DEFAULT_ERROR_MESSAGE = (
        'Password must be at least 8 characters long, contain at least '
        'one uppercase letter, one lowercase letter, one number, and '
        'one special character from [@, $, !, %, *, ?, &]')

    def __init__(self,  *args, msg=DEFAULT_ERROR_MESSAGE, **kwargs):
        super().__init__(msg, *args, **kwargs)


class UserNotFoundError(BaseSDMSException):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not found'
        super().__init__(msg, *args, **kwargs)

class FieldNotFoundError(BaseSDMSException):
    def __init__(self, field:str, *args, **kwargs):
        msg = f'Field `{field}` not found'
        super().__init__(msg, *args, **kwargs)     

class StudentNotEnrolledInCourseError(BaseSDMSException):
    def __init__(self, username:str, *args, **kwargs):
        msg = f'User `{username}` not enrolled in course'
        super().__init__(msg, *args, **kwargs)

class ValueNotFoundError(BaseSDMSException):
    def __init__(self, value:str, *args, **kwargs):
        msg = f'Value `{value}` not found'
        super().__init__(msg, *args, **kwargs)

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class HelloRequest(_message.Message):
    __slots__ = ("name",)
    NAME_FIELD_NUMBER: _ClassVar[int]
    name: str
    def __init__(self, name: _Optional[str] = ...) -> None: ...

class HelloReply(_message.Message):
    __slots__ = ("message",)
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...

class GradeRequest(_message.Message):
    __slots__ = ("user_id", "course_code", "token")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    COURSE_CODE_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    course_code: str
    token: str
    def __init__(self, user_id: _Optional[str] = ..., course_code: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class GradeReply(_message.Message):
    __slots__ = ("grade",)
    GRADE_FIELD_NUMBER: _ClassVar[int]
    grade: str
    def __init__(self, grade: _Optional[str] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ("user_id", "password", "role")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    ROLE_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    password: str
    role: str
    def __init__(self, user_id: _Optional[str] = ..., password: _Optional[str] = ..., role: _Optional[str] = ...) -> None: ...

class LoginReply(_message.Message):
    __slots__ = ("token",)
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    def __init__(self, token: _Optional[str] = ...) -> None: ...

class IDRequest(_message.Message):
    __slots__ = ("user_id", "token")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    token: str
    def __init__(self, user_id: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class StudentDetailsReply(_message.Message):
    __slots__ = ("name", "email", "department", "degree", "graduation_year", "current_gpa")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    DEPARTMENT_FIELD_NUMBER: _ClassVar[int]
    DEGREE_FIELD_NUMBER: _ClassVar[int]
    GRADUATION_YEAR_FIELD_NUMBER: _ClassVar[int]
    CURRENT_GPA_FIELD_NUMBER: _ClassVar[int]
    name: str
    email: str
    department: str
    degree: str
    graduation_year: str
    current_gpa: str
    def __init__(self, name: _Optional[str] = ..., email: _Optional[str] = ..., department: _Optional[str] = ..., degree: _Optional[str] = ..., graduation_year: _Optional[str] = ..., current_gpa: _Optional[str] = ...) -> None: ...

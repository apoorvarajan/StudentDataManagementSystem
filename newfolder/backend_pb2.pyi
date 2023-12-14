from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class IDRequest(_message.Message):
    __slots__ = ("token", "user_id")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    token: str
    user_id: str
    def __init__(self, token: _Optional[str] = ..., user_id: _Optional[str] = ...) -> None: ...

class StudentDetailsReply(_message.Message):
    __slots__ = ("name", "email_id", "phone", "advisor", "dept", "degree", "gpa", "grad_sem", "grad_year")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_ID_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    ADVISOR_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    DEGREE_FIELD_NUMBER: _ClassVar[int]
    GPA_FIELD_NUMBER: _ClassVar[int]
    GRAD_SEM_FIELD_NUMBER: _ClassVar[int]
    GRAD_YEAR_FIELD_NUMBER: _ClassVar[int]
    name: str
    email_id: str
    phone: str
    advisor: str
    dept: str
    degree: str
    gpa: str
    grad_sem: str
    grad_year: str
    def __init__(self, name: _Optional[str] = ..., email_id: _Optional[str] = ..., phone: _Optional[str] = ..., advisor: _Optional[str] = ..., dept: _Optional[str] = ..., degree: _Optional[str] = ..., gpa: _Optional[str] = ..., grad_sem: _Optional[str] = ..., grad_year: _Optional[str] = ...) -> None: ...

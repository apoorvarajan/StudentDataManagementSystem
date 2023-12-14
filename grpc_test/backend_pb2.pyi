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

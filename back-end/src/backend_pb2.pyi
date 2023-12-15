from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

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
    __slots__ = ("status", "token")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    status: str
    token: str
    def __init__(self, status: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class IDRequest(_message.Message):
    __slots__ = ("token", "user_id")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    token: str
    user_id: str
    def __init__(self, token: _Optional[str] = ..., user_id: _Optional[str] = ...) -> None: ...

class StudentDetailsReply(_message.Message):
    __slots__ = ("name", "email_id", "address", "phone", "advisor", "dept", "degree", "gpa", "grad_sem", "grad_year")
    NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_ID_FIELD_NUMBER: _ClassVar[int]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PHONE_FIELD_NUMBER: _ClassVar[int]
    ADVISOR_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    DEGREE_FIELD_NUMBER: _ClassVar[int]
    GPA_FIELD_NUMBER: _ClassVar[int]
    GRAD_SEM_FIELD_NUMBER: _ClassVar[int]
    GRAD_YEAR_FIELD_NUMBER: _ClassVar[int]
    name: Name
    email_id: str
    address: Address
    phone: str
    advisor: str
    dept: str
    degree: str
    gpa: float
    grad_sem: str
    grad_year: int
    def __init__(self, name: _Optional[_Union[Name, _Mapping]] = ..., email_id: _Optional[str] = ..., address: _Optional[_Union[Address, _Mapping]] = ..., phone: _Optional[str] = ..., advisor: _Optional[str] = ..., dept: _Optional[str] = ..., degree: _Optional[str] = ..., gpa: _Optional[float] = ..., grad_sem: _Optional[str] = ..., grad_year: _Optional[int] = ...) -> None: ...

class Name(_message.Message):
    __slots__ = ("first_name", "middle_name", "last_name")
    FIRST_NAME_FIELD_NUMBER: _ClassVar[int]
    MIDDLE_NAME_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_FIELD_NUMBER: _ClassVar[int]
    first_name: str
    middle_name: str
    last_name: str
    def __init__(self, first_name: _Optional[str] = ..., middle_name: _Optional[str] = ..., last_name: _Optional[str] = ...) -> None: ...

class Address(_message.Message):
    __slots__ = ("line1", "city", "state", "zip")
    LINE1_FIELD_NUMBER: _ClassVar[int]
    CITY_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    ZIP_FIELD_NUMBER: _ClassVar[int]
    line1: str
    city: str
    state: str
    zip: str
    def __init__(self, line1: _Optional[str] = ..., city: _Optional[str] = ..., state: _Optional[str] = ..., zip: _Optional[str] = ...) -> None: ...

class CurrentCoursesReply(_message.Message):
    __slots__ = ("course", "prev_course")
    COURSE_FIELD_NUMBER: _ClassVar[int]
    PREV_COURSE_FIELD_NUMBER: _ClassVar[int]
    course: _containers.RepeatedCompositeFieldContainer[CurrentCourse]
    prev_course: _containers.RepeatedCompositeFieldContainer[PreviousCourse]
    def __init__(self, course: _Optional[_Iterable[_Union[CurrentCourse, _Mapping]]] = ..., prev_course: _Optional[_Iterable[_Union[PreviousCourse, _Mapping]]] = ...) -> None: ...

class CurrentCourse(_message.Message):
    __slots__ = ("course_number", "dept", "n_credits", "course_name", "instructors")
    COURSE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    N_CREDITS_FIELD_NUMBER: _ClassVar[int]
    COURSE_NAME_FIELD_NUMBER: _ClassVar[int]
    INSTRUCTORS_FIELD_NUMBER: _ClassVar[int]
    course_number: str
    dept: str
    n_credits: int
    course_name: str
    instructors: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, course_number: _Optional[str] = ..., dept: _Optional[str] = ..., n_credits: _Optional[int] = ..., course_name: _Optional[str] = ..., instructors: _Optional[_Iterable[str]] = ...) -> None: ...

class PreviousCourse(_message.Message):
    __slots__ = ("course_number", "dept", "n_credits", "course_name", "grade", "semester", "year")
    COURSE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    N_CREDITS_FIELD_NUMBER: _ClassVar[int]
    COURSE_NAME_FIELD_NUMBER: _ClassVar[int]
    GRADE_FIELD_NUMBER: _ClassVar[int]
    SEMESTER_FIELD_NUMBER: _ClassVar[int]
    YEAR_FIELD_NUMBER: _ClassVar[int]
    course_number: str
    dept: str
    n_credits: int
    course_name: str
    grade: str
    semester: str
    year: int
    def __init__(self, course_number: _Optional[str] = ..., dept: _Optional[str] = ..., n_credits: _Optional[int] = ..., course_name: _Optional[str] = ..., grade: _Optional[str] = ..., semester: _Optional[str] = ..., year: _Optional[int] = ...) -> None: ...

class RequirementRequest(_message.Message):
    __slots__ = ("token", "user_id", "course_id")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    COURSE_ID_FIELD_NUMBER: _ClassVar[int]
    token: str
    user_id: str
    course_id: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, token: _Optional[str] = ..., user_id: _Optional[str] = ..., course_id: _Optional[_Iterable[str]] = ...) -> None: ...

class RequirementReply(_message.Message):
    __slots__ = ("progress",)
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    progress: str
    def __init__(self, progress: _Optional[str] = ...) -> None: ...

class BrowseRequest(_message.Message):
    __slots__ = ("token", "degree", "dept")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    DEGREE_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    token: str
    degree: str
    dept: str
    def __init__(self, token: _Optional[str] = ..., degree: _Optional[str] = ..., dept: _Optional[str] = ...) -> None: ...

class BrowseReply(_message.Message):
    __slots__ = ("course",)
    COURSE_FIELD_NUMBER: _ClassVar[int]
    course: _containers.RepeatedCompositeFieldContainer[Course]
    def __init__(self, course: _Optional[_Iterable[_Union[Course, _Mapping]]] = ...) -> None: ...

class Course(_message.Message):
    __slots__ = ("course_number", "dept", "n_credits", "course_name", "description", "req_satisfied")
    COURSE_NUMBER_FIELD_NUMBER: _ClassVar[int]
    DEPT_FIELD_NUMBER: _ClassVar[int]
    N_CREDITS_FIELD_NUMBER: _ClassVar[int]
    COURSE_NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    REQ_SATISFIED_FIELD_NUMBER: _ClassVar[int]
    course_number: str
    dept: str
    n_credits: int
    course_name: str
    description: str
    req_satisfied: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, course_number: _Optional[str] = ..., dept: _Optional[str] = ..., n_credits: _Optional[int] = ..., course_name: _Optional[str] = ..., description: _Optional[str] = ..., req_satisfied: _Optional[_Iterable[str]] = ...) -> None: ...

class SetGradeRequest(_message.Message):
    __slots__ = ("token", "user_id", "course_id", "grade")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    COURSE_ID_FIELD_NUMBER: _ClassVar[int]
    GRADE_FIELD_NUMBER: _ClassVar[int]
    token: str
    user_id: str
    course_id: str
    grade: str
    def __init__(self, token: _Optional[str] = ..., user_id: _Optional[str] = ..., course_id: _Optional[str] = ..., grade: _Optional[str] = ...) -> None: ...

class SetGradeReply(_message.Message):
    __slots__ = ("status",)
    STATUS_FIELD_NUMBER: _ClassVar[int]
    status: bool
    def __init__(self, status: bool = ...) -> None: ...

class EmailRequest(_message.Message):
    __slots__ = ("token", "user_id", "subject", "body")
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    BODY_FIELD_NUMBER: _ClassVar[int]
    token: str
    user_id: str
    subject: str
    body: str
    def __init__(self, token: _Optional[str] = ..., user_id: _Optional[str] = ..., subject: _Optional[str] = ..., body: _Optional[str] = ...) -> None: ...

class EmailReply(_message.Message):
    __slots__ = ("status",)
    STATUS_FIELD_NUMBER: _ClassVar[int]
    status: bool
    def __init__(self, status: bool = ...) -> None: ...

from server.user import Student, Faculty
from server.department import Department
from server.semester import Semester

class InvalidStudentTypeError(Exception):
    ...

class Course:
    def __init__(self, department:Department=None, course_number:str=None,
            course_name:str=None, n_credits:int=None, student_types:list=None,
            **kwargs):
        self._department = department
        self._course_number = course_number
        self._course_name = course_name
        self._n_credits = n_credits
        self._student_types = student_types
        
    @property
    def department(self):
        return self._department
    
    @property
    def course_number(self):
        return self._course_number
    
    @property
    def course_name(self):
        return self._course_name
    
    @property
    def n_credits(self):
        return self._n_credits
    
    @property
    def course_code(self):
        return f'{self._department.dept_id} {self._course_number}'
    
    @property
    def student_types(self):
        return self._student_types.copy()
    
    def set_name(self, name:str):
        self._name = name
    
    def copy(self):
        return Course(self._department.copy(), self._course_number, self._name,
            self._n_credits, self._student_types.copy())

class CourseInstance:
    def __init__(self, course:Course, semester:Semester,
            instructors:list[Faculty], **kwargs):
        self._course = course
        self._semester = semester
        # self._max_students = max_students
        self._instructors = instructors
        self._students = []
        self._teaching_assistants = []

    @property
    def course(self):
        return self._course.copy()

    @property
    def semester(self):
        return self._semester.copy()
    
    @property
    def total_students(self)->int:
        return len(self._students)

    @property
    def instructors(self):
        return [instructor.copy() for instructor in self._instructors]
    
    @property
    def students(self):
        return [student.copy() for student in self._students]
    
    @property
    def teaching_assistants(self):
        return [ta.copy() for ta in self._teaching_assistants]
    
    @property
    def course_code(self):
        return self._course.course_code

    def set_instructors(self, instructors:list):
        self._instructors = instructors

    def set_students(self, students:list):
        self._students = students

    def set_teaching_assistants(self, teaching_assistants:list):
        self._teaching_assistants = teaching_assistants

    def add_student(self, student:Student):
        """Add a student to the course if the course is not full and the student
        is not already in the course."""
        if student in self._students:
            raise UserAlreadyEnrolledError
        if len(student.courses) >= 4:
            raise MaxCoursesError
        self._students.append(student)
        #student.courses.append(self)

    def remove_student(self, student:Student):
        """Remove a student from the course."""
        self._students.remove(student)
        #student.courses.remove(self)

    def add_teaching_assistant(self, teaching_assistant:Faculty):
        """Add a TA to the course if not already in the course."""
        if teaching_assistant in self._teaching_assistants:
            raise UserAlreadyEnrolledError
        self._teaching_assistants.append(teaching_assistant)

    def remove_teaching_assistant(self, teaching_assistant:Faculty):
        """Remove a TA from the course."""
        self._teaching_assistants.remove(teaching_assistant)

    def add_instructor(self, instructor:Faculty):
        """Add an instructor to the course if not already in the course."""
        if instructor in self._instructors:
            raise UserAlreadyEnrolledError
        self._instructors.append(instructor)

    def remove_instructor(self, instructor:Faculty):
        """Remove an instructor from the course."""
        self._instructors.remove(instructor)

class CourseClass:
    def __init__(self, course_instance:CourseInstance, class_id:int, 
            max_students:int, student_type:str, uww:bool):
        self._course_instance = course_instance
        self._class_id = class_id
        self._max_students = max_students
        self._students = []
        self._student_type = self.validate_student_type(course_instance.course, student_type)
        self._uww = uww

    @staticmethod
    def validate_student_type(course:Course, student_type:str):
        if student_type not in course.student_types:
            raise InvalidStudentTypeError(f'Student type `{student_type}` not found in course `{course.course_code}`')
        return student_type
        
    @property
    def course_instance(self):
        return self._course_instance.copy()

    @property
    def course(self):
        return self._course_instance.course

    @property
    def class_id(self):
        return self._class_id
    
    @property
    def student_type(self):
        return self._student_type
    
    @property
    def uww(self):
        return self._uww
    
    def set_uww(self, uww:bool):
        self._uww = uww

    def add_student(self, student:Student):
        """Add a student to the course if the course is not full and the student
        is not already in the course."""
        if len(self._students) >= self._max_students:
            raise CourseFullError
        if student in self._students:
            raise UserAlreadyEnrolledError
        if len(student.courses) >= 4:
            raise MaxCoursesError
        self._students.append(student)
        #student.courses.append(self)


class CourseFullError(Exception):
    """Exception raised when a student tries to enroll in a course that is full."""
    def __init__(self):
        super().__init__("Course is full.")

class UserAlreadyEnrolledError(Exception):
    """Exception raised when a student tries to enroll in a course that they
    are already enrolled in."""
    def __init__(self):
        super().__init__("User is already enrolled in the course.")

class MaxCoursesError(Exception):
    """Exception raised when a student tries to enroll in a 5th course."""
    def __init__(self):
        super().__init__("Student is already enrolled in 4 courses.")

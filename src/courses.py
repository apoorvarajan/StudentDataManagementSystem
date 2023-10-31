from user import Student, Faculty

class Course:
    def __init__(self, course_code:str, name:str, section:str, 
            max_students:int, instructors:list, uww:bool
        ):
        self._course_code = course_code
        self._name = name
        self._section = section
        self._max_students = max_students
        self._instructors = instructors
        self._students = []
        self._teaching_assistants = []
        self._uww = uww

    @property
    def course_code(self):
        return self._course_code
    
    @property
    def name(self):
        return self._name
    
    @property
    def section(self):
        return self._section
    
    @property
    def max_students(self):
        return self._max_students
    
    @property
    def instructors(self):
        return self._instructors
    
    @property
    def students(self):
        return self._students
    
    @property
    def teaching_assistants(self):
        return self._teaching_assistants
    
    @property
    def uww(self):
        return self._uww
    
    def set_course_code(self, course_code:str):
        self._course_code = course_code

    def set_name(self, name:str):
        self._name = name

    def set_section(self, section:str):
        self._section = section

    def set_max_students(self, max_students:int):
        self._max_students = max_students

    def set_instructors(self, instructors:list):
        self._instructors = instructors

    def set_students(self, students:list):
        self._students = students

    def set_teaching_assistants(self, teaching_assistants:list):
        self._teaching_assistants = teaching_assistants

    def set_uww(self, uww:bool):
        self._uww = uww

    def add_student(self, student:Student):
        """Add a student to the course if the course is not full and the student is not already in the course."""
        if len(self._students) >= self._max_students:
            raise CourseFullError
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



class CourseFullError(Exception):
    """Exception raised when a student tries to enroll in a course that is full."""
    def __init__(self):
        super().__init__("Course is full.")

class UserAlreadyEnrolledError(Exception):
    """Exception raised when a student tries to enroll in a course that they are already enrolled in."""
    def __init__(self):
        super().__init__("User is already enrolled in the course.")

class MaxCoursesError(Exception):
    """Exception raised when a student tries to enroll in a 5th course."""
    def __init__(self):
        super().__init__("Student is already enrolled in 4 courses.")




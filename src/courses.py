class Course:
    def __init__(self, course_code:str, name:str, section:str, 
            max_students:int, instructors:list
        ):
        self._course_code = course_code
        self._name = name
        self._section = section
        self._max_students = max_students
        self._instructors = instructors
        self._students = []
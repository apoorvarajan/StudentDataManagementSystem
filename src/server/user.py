from abc import ABC, abstractmethod

from server.contact_details import ContactDetails, EmergencyContact
from server.department import Department

class BaseUser(ABC):
    def __init__(self, user_id:str, first_name:str, middle_name:str,
            last_name:str, contact_details:ContactDetails,
            emergency_contact:EmergencyContact):
        self._user_id = user_id
        self._first_name = first_name
        self._middle_name = middle_name
        self._last_name = last_name
        self._contact_details = contact_details
        self._emergency_contact = emergency_contact

    @property
    def user_id(self):
        return self._user_id

    @property
    def first_name(self):
        return self._first_name

    @property
    def middle_name(self):
        return self._middle_name

    @property
    def last_name(self):
        return self._last_name

    @property
    def contact_details(self):
        if self._contact_details is None:
            return None
        return self._contact_details.copy()

    @property
    def emergency_contact(self):
        if self._emergency_contact is None:
            return None
        return self._emergency_contact.copy()

class Student(BaseUser):
    def __init__(self, user_id:str, /, first_name:str=None, middle_name:str=None,
            last_name:str=None, contact_details:ContactDetails=None,
            emergency_contact:EmergencyContact=None, student_type:str=None,
            admission_year:int=None, exp_grad_year:int=None, program:str=None,
            major:str=None, minor:str=None, concentration:str=None,
            dept:Department=None, advisor:'Faculty'=None, **kwargs
        ):
        super().__init__(user_id, first_name, middle_name, last_name,
            contact_details, emergency_contact)
        self._student_type = student_type
        self._admission_year = admission_year
        self._exp_grad_year = exp_grad_year
        self._program = program
        self._major = major
        self._minor = minor
        self._concentration = concentration
        self._dept = dept
        self._advisor = advisor

    @property
    def student_type(self)->str:
        return self._student_type
    
    @property
    def admission_year(self)->int:
        return self._admission_year
    
    @property
    def exp_grad_year(self)->int:
        return self._exp_grad_year
    
    @property
    def program(self)->str:
        return self._program
    
    @property
    def major(self)->str:
        return self._major
    
    @property
    def minor(self)->str:
        return self._minor
    
    @property
    def concentration(self)->str:
        return self._concentration
    
    @property
    def dept(self)->Department:
        return self._dept.copy()
    
    @property
    def advisor(self)->'Faculty':
        if self._advisor is None:
            return None
        return self._advisor.copy()
    
    def copy(self)->'Student':
        return Student(self.user_id, self.first_name, self.middle_name,
            self.last_name, self.contact_details, self.emergency_contact,
            self.student_type, self.admission_year, self.exp_grad_year,
            self.program, self.major, self.minor, self.concentration,
            self.dept, self.advisor)
    
class Faculty(BaseUser):
    def __init__(self, user_id:str, first_name:str, middle_name:str,
            last_name:str, contact_details:ContactDetails,
            emergency_contact:EmergencyContact, faculty_type:str,
            dept:Department, students:list[Student]
        ):
        super().__init__(user_id, first_name, middle_name, last_name,
            contact_details, emergency_contact)
        self._faculty_type = faculty_type
        self._dept = dept
        self._students = students

    @property
    def faculty_type(self)->str:
        return self._faculty_type
    
    @property
    def dept(self)->Department:
        if self._dept is None:
            return None
        return self._dept.copy()
    
    @property
    def students(self)->list[Student]:
        if self._students is None:
            return None
        return [student.copy() for student in self._students]
    
    def copy(self)->'Faculty':
        return Faculty(self.user_id, self.first_name, self.middle_name,
            self.last_name, self.contact_details, self.emergency_contact,
            self.faculty_type, self.dept, self.students)
    
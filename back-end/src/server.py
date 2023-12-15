from concurrent import futures
import logging
import grpc
import backend_pb2 
import backend_pb2_grpc
import re
import requests
from sdms_server.api.api import *
from sdms_server.validation.validation import *
from dotenv import load_dotenv

# Helper method to convert a dictionary to a Name message
def dict_to_name(name_dict):
    return backend_pb2.Name(**name_dict)

# Helper method to convert a dictionary to an Address message
def dict_to_address(address_dict):
    return backend_pb2.Address(**address_dict)

def dict_to_current_course(curr_courses_dict):
    return backend_pb2.CurrentCourse(**curr_courses_dict)

def dict_to_prev_course(prev_courses_dict):
    return backend_pb2.PreviousCourse(**prev_courses_dict)

def dict_to_course(course_dict):
    return backend_pb2.Course(**course_dict)

def get_public_ip():
    try:
        # Use a service that echoes back the public IP
        response = requests.get('https://api64.ipify.org?format=json')
        
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response and extract the IP address
            public_ip = response.json()['ip']
            return public_ip
        else:
            print(f"Error: Unable to retrieve public IP. Status code: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None




class Greeter(backend_pb2_grpc.SDMS_BackendServicer):
    # def SayHello(self, request, context):
    #     print(f"Received request: {request}")
    #     # check
    #     # try:
    #     #     request.user_id
    #     #     assert request.a > 1
    #     #     assert request.a < 10
    #     #     set_course({
    #     #         'a' : a
    #     #     })
    #     #     return backend_pb2.HelloReply(message="Hello, %s!" % request.name)
    #     # except AssertionError:
    #     #     return backend_pb2.HelloReply(message="Error")
        
    # def GetGrade(self, request, context):
    #         #value = get_course_grade(request.token, student_id=request.user_id, course_code=request.course_code)
    #     return backend_pb2.GradeReply(grade="A")
    
    def Login(self, request, context):
        status, token = authenticate(request.user_id, request.password, request.role)
        if(status == False):
            return backend_pb2.LoginReply(status=token, token="")
        else:
            return backend_pb2.LoginReply(status="Success", token=token)
        #return backend_pb2.LoginReply(status="Success", token="fnejfnmfdskjfhuifnmnf")
    
    def GetStudentDetails(self, request, context):
        # name_dict = {"first_name": "Bob", "middle_name": "", "last_name": "Smith"}
        # address_dict = {"line1": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345"}
        student_details = get_student_details(request.token, user_id=request.user_id)
        return backend_pb2.StudentDetailsReply(name=dict_to_name(student_details["name"]), email_id = student_details["email"], 
                                               address=dict_to_address(student_details["address"]), phone = student_details["phone"], 
                                               advisor=student_details["advisor"], dept = student_details["department"], 
                                               degree = student_details["degree"], gpa = student_details["gpa"], grad_sem = student_details["grad_sem"], 
                                               grad_year = student_details["grad_year"])
    

    def GetCourseRequirements(self, request, context):
        courses = set(get_current_courses(request.token, user_id=request.user_id))
        courses.update(get_completed_courses(request.token, user_id=request.user_id))
        courses.update(request.course_id)
        user = get_student(request.token, user_id=request.user_id)
        degree_requirements = get_degree_requirements(request.token, department=user['department'], degree=user['degree'])
        requirements_mapping = {
            r : v['eligible_courses'] for r, v in degree_requirements.items()}
        course_to_req = {}
        for req, crs in requirements_mapping.items():
            for course in crs:
                if course not in course_to_req:
                    course_to_req[course] = []
                course_to_req[course].append(req)
        num_requirements = {
            r : v['num_reqd'] for r, v in degree_requirements.items()}
        completed, total = check_requirements_satisfied(courses, course_to_req, num_requirements)
        reply = f'{completed}/{total} requirements satisfied'
        return backend_pb2.RequirementReply(progress=reply)

    def GetStudentCourses(self, request, context):
        curr_courses_dict = {"course_number": "520", "dept": "COMPSCI", "n_credits": 3, "course_name": "Software Engineering", "instructors": ["Feather Cowboy"]}
        prev_courses_dict = {"course_number": "574", "dept": "COMPSCI", "n_credits": 3, "course_name": "IVC", "grade": "A", "semester": "Spring", "year": 2021}
        return backend_pb2.CurrentCoursesReply(course=[dict_to_current_course(curr_courses_dict)], prev_course=[dict_to_prev_course(prev_courses_dict)])
    
    def GetCourses(self, request, context):
        course_dict = {"course_number": "520", "dept": "COMPSCI", "n_credits": 3, "course_name": "Software Engineering", "description": "Learn how to write software", "req_satisfied": ["core", "elective"]}
        return backend_pb2.BrowseReply(course=[dict_to_course(course_dict)])
        
    def SetStudentGrade(self, request, context):
        result = set_grade(request.token, user_id=request.user_id, course_id=request.course_id, grade=request.grade)
        #result = set_grade("", user_id="bob1253", course_id="COMPSCI 520", grade="B-")
        return backend_pb2.SetGradeReply(status=result)
    
    def SendEmail(self, request, context):
        result = notify_user(request.token, user_id=request.user_id, subject=request.subject, body=request.body)
        return backend_pb2.EmailReply(status=result)
    
def serve():
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    backend_pb2_grpc.add_SDMS_BackendServicer_to_server(Greeter(), server)
    server.add_insecure_port("[::]:" + port)
    server.start()
    print(f'Public IP: {get_public_ip()}')
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    load_dotenv()
    serve()

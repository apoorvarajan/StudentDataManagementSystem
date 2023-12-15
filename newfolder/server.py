from concurrent import futures
import logging

import grpc
import backend_pb2 
import backend_pb2_grpc
import re

import requests

# Helper method to convert a dictionary to a Name message
def dict_to_name(name_dict):
    return backend_pb2.Name(**name_dict)

# Helper method to convert a dictionary to an Address message
def dict_to_address(address_dict):
    return backend_pb2.Address(**address_dict)

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
    
    # def Login(self, request, context):
    #     return backend_pb2.LoginReply(status="Success", token="fnejfnmfdskjfhuifnmnf")
    
    def GetStudentDetails(self, request, context):
        name_dict = {"first_name": "Bob", "middle_name": "", "last_name": "Smith"}
        address_dict = {"line1": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345"}
        
        return backend_pb2.StudentDetailsReply(name="Bob", email_id = "bob123@email.com", phone = "413 489 6576", 
                                               advisor="Pelizabeth Earolski", dept = "COMPSCI", degree = "MS",
                                               gpa = "3.88", grad_sem = "Spring", grad_year = "2024")


        

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
    serve()
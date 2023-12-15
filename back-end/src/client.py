from __future__ import print_function

import logging

import grpc
import backend_pb2 
import backend_pb2_grpc
import jwt
from dotenv import load_dotenv
import os

def create_token(payload):
    return jwt.encode(payload,
        os.getenv('JWT_SECRET'),
        algorithm=os.getenv('JWT_ALGORITHM'))


def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    print("Will try to greet world ...")
 
    # with grpc.insecure_channel("localhost:50051") as channel:
    #     stub = backend_pb2_grpc.SDMS_BackendStub(channel)
    #     response = stub.GetGrade(backend_pb2.GradeRequest(user_id='bob123', course_code="COMPSCI 520", token="abc"))
    # print("Greeter client received: " + response.grade)

    with grpc.insecure_channel("localhost:50051") as channel:
        stub = backend_pb2_grpc.SDMS_BackendStub(channel)

        #response_login = stub.Login(backend_pb2.LoginRequest(user_id='bob123', password='aaaa', role='student'))
        response_login = stub.Login(backend_pb2.LoginRequest(user_id='fcowboy', password='passw0rd', role='instructor'))
        print(response_login)

        response_set_grade = stub.SetStudentGrade(backend_pb2.SetGradeRequest(token=response_login.token, user_id='bob123', course_id='COMPSCI 520', grade='B'))
        print(response_set_grade)

        response_login = stub.Login(backend_pb2.LoginRequest(user_id='admin', password='admin', role='admin'))
        print(response_login)

        #response_student = stub.GetStudentDetails(backend_pb2.IDRequest(token='fnejfnmfdskjfhuifnmnf', user_id='bob123'))
        # response_student = stub.GetStudentDetails(backend_pb2.IDRequest(token=response_login.token, user_id='bob123'))
        # print(response_student)

        # response_requirements = stub.GetCourseRequirements(backend_pb2.RequirementRequest(token='fnejfnmfdskjfhuifnmnf', course_id=['COMPSCI 520', 'COMPSCI 574']))
        # print(response_requirements)

        # response_courses = stub.GetStudentCourses(backend_pb2.IDRequest(token='fnejfnmfdskjfhuifnmnf', user_id='bob123'))
        # print(response_courses)

        # response_all_courses = stub.GetCourses(backend_pb2.BrowseRequest(token='fnejfnmfdskjfhuifnmnf', degree='MS', dept='COMPSCI'))
        # print(response_all_courses)

        

        response_email = stub.SendEmail(backend_pb2.EmailRequest(token=response_login.token, user_id='bob123', subject='Test', body='Test'))
        print(response_email)

if __name__ == "__main__":
    logging.basicConfig()
    load_dotenv()
    run()
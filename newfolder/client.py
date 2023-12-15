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
        response = stub.GetStudentDetails(backend_pb2.IDRequest(token="fnejfnmfdskjfhuifnmnf", user_id="bob123"))
    print(response)

if __name__ == "__main__":
    logging.basicConfig()
    load_dotenv()
    run()
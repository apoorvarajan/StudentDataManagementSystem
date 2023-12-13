from concurrent import futures
import logging

import grpc
import backend_pb2
import backend_pb2_grpc
import re

def validate_course_code(course_code):
    pattern = re.compile(r'^[A-Z]+\s\d+$')

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
        
    def GetGrade(self, request, context):
        try:
            assert validate_course_code(request.course_code)
        except AssertionError:
            return backend_pb2.GradeReply(message="Invalid course code")


def serve():
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    backend_pb2_grpc.add_SDMS_BackendServicer_to_server(Greeter(), server)
    server.add_insecure_port("[::]:" + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()
# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import backend_pb2 as backend__pb2


class SDMS_BackendStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SayHello = channel.unary_unary(
                '/SDMS_Backend/SayHello',
                request_serializer=backend__pb2.HelloRequest.SerializeToString,
                response_deserializer=backend__pb2.HelloReply.FromString,
                )
        self.GetGrade = channel.unary_unary(
                '/SDMS_Backend/GetGrade',
                request_serializer=backend__pb2.GradeRequest.SerializeToString,
                response_deserializer=backend__pb2.GradeReply.FromString,
                )


class SDMS_BackendServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SayHello(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetGrade(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SDMS_BackendServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SayHello': grpc.unary_unary_rpc_method_handler(
                    servicer.SayHello,
                    request_deserializer=backend__pb2.HelloRequest.FromString,
                    response_serializer=backend__pb2.HelloReply.SerializeToString,
            ),
            'GetGrade': grpc.unary_unary_rpc_method_handler(
                    servicer.GetGrade,
                    request_deserializer=backend__pb2.GradeRequest.FromString,
                    response_serializer=backend__pb2.GradeReply.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'SDMS_Backend', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SDMS_Backend(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SayHello(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/SDMS_Backend/SayHello',
            backend__pb2.HelloRequest.SerializeToString,
            backend__pb2.HelloReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetGrade(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/SDMS_Backend/GetGrade',
            backend__pb2.GradeRequest.SerializeToString,
            backend__pb2.GradeReply.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

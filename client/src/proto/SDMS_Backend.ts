// Original file: ../protos/frontend.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GradeReply as _GradeReply, GradeReply__Output as _GradeReply__Output } from './GradeReply';
import type { GradeRequest as _GradeRequest, GradeRequest__Output as _GradeRequest__Output } from './GradeRequest';
import type { HelloReply as _HelloReply, HelloReply__Output as _HelloReply__Output } from './HelloReply';
import type { HelloRequest as _HelloRequest, HelloRequest__Output as _HelloRequest__Output } from './HelloRequest';

export interface SDMS_BackendClient extends grpc.Client {
  GetGrade(argument: _GradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  GetGrade(argument: _GradeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  GetGrade(argument: _GradeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  GetGrade(argument: _GradeRequest, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  getGrade(argument: _GradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  getGrade(argument: _GradeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  getGrade(argument: _GradeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  getGrade(argument: _GradeRequest, callback: grpc.requestCallback<_GradeReply__Output>): grpc.ClientUnaryCall;
  
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _HelloRequest, callback: grpc.requestCallback<_HelloReply__Output>): grpc.ClientUnaryCall;
  
}

export interface SDMS_BackendHandlers extends grpc.UntypedServiceImplementation {
  GetGrade: grpc.handleUnaryCall<_GradeRequest__Output, _GradeReply>;
  
  SayHello: grpc.handleUnaryCall<_HelloRequest__Output, _HelloReply>;
  
}

export interface SDMS_BackendDefinition extends grpc.ServiceDefinition {
  GetGrade: MethodDefinition<_GradeRequest, _GradeReply, _GradeRequest__Output, _GradeReply__Output>
  SayHello: MethodDefinition<_HelloRequest, _HelloReply, _HelloRequest__Output, _HelloReply__Output>
}

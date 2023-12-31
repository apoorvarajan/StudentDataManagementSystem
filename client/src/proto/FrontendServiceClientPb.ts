/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: frontend.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as frontend_pb from './frontend_pb'; // proto import: "frontend.proto"


export class SDMS_BackendClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/Login',
    grpcWeb.MethodType.UNARY,
    frontend_pb.LoginRequest,
    frontend_pb.LoginReply,
    (request: frontend_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.LoginReply.deserializeBinary
  );

  login(
    request: frontend_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.LoginReply>;

  login(
    request: frontend_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.LoginReply) => void): grpcWeb.ClientReadableStream<frontend_pb.LoginReply>;

  login(
    request: frontend_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.LoginReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorGetStudentDetails = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/GetStudentDetails',
    grpcWeb.MethodType.UNARY,
    frontend_pb.IDRequest,
    frontend_pb.StudentDetailsReply,
    (request: frontend_pb.IDRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.StudentDetailsReply.deserializeBinary
  );

  getStudentDetails(
    request: frontend_pb.IDRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.StudentDetailsReply>;

  getStudentDetails(
    request: frontend_pb.IDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.StudentDetailsReply) => void): grpcWeb.ClientReadableStream<frontend_pb.StudentDetailsReply>;

  getStudentDetails(
    request: frontend_pb.IDRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.StudentDetailsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/GetStudentDetails',
        request,
        metadata || {},
        this.methodDescriptorGetStudentDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/GetStudentDetails',
    request,
    metadata || {},
    this.methodDescriptorGetStudentDetails);
  }

  methodDescriptorGetStudentCourses = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/GetStudentCourses',
    grpcWeb.MethodType.UNARY,
    frontend_pb.IDRequest,
    frontend_pb.CurrentCoursesReply,
    (request: frontend_pb.IDRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.CurrentCoursesReply.deserializeBinary
  );

  getStudentCourses(
    request: frontend_pb.IDRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.CurrentCoursesReply>;

  getStudentCourses(
    request: frontend_pb.IDRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.CurrentCoursesReply) => void): grpcWeb.ClientReadableStream<frontend_pb.CurrentCoursesReply>;

  getStudentCourses(
    request: frontend_pb.IDRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.CurrentCoursesReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/GetStudentCourses',
        request,
        metadata || {},
        this.methodDescriptorGetStudentCourses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/GetStudentCourses',
    request,
    metadata || {},
    this.methodDescriptorGetStudentCourses);
  }

  methodDescriptorGetCourseRequirements = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/GetCourseRequirements',
    grpcWeb.MethodType.UNARY,
    frontend_pb.RequirementRequest,
    frontend_pb.RequirementReply,
    (request: frontend_pb.RequirementRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.RequirementReply.deserializeBinary
  );

  getCourseRequirements(
    request: frontend_pb.RequirementRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.RequirementReply>;

  getCourseRequirements(
    request: frontend_pb.RequirementRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.RequirementReply) => void): grpcWeb.ClientReadableStream<frontend_pb.RequirementReply>;

  getCourseRequirements(
    request: frontend_pb.RequirementRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.RequirementReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/GetCourseRequirements',
        request,
        metadata || {},
        this.methodDescriptorGetCourseRequirements,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/GetCourseRequirements',
    request,
    metadata || {},
    this.methodDescriptorGetCourseRequirements);
  }

  methodDescriptorGetCourses = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/GetCourses',
    grpcWeb.MethodType.UNARY,
    frontend_pb.BrowseRequest,
    frontend_pb.BrowseReply,
    (request: frontend_pb.BrowseRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.BrowseReply.deserializeBinary
  );

  getCourses(
    request: frontend_pb.BrowseRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.BrowseReply>;

  getCourses(
    request: frontend_pb.BrowseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.BrowseReply) => void): grpcWeb.ClientReadableStream<frontend_pb.BrowseReply>;

  getCourses(
    request: frontend_pb.BrowseRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.BrowseReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/GetCourses',
        request,
        metadata || {},
        this.methodDescriptorGetCourses,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/GetCourses',
    request,
    metadata || {},
    this.methodDescriptorGetCourses);
  }

  methodDescriptorSetStudentGrade = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/SetStudentGrade',
    grpcWeb.MethodType.UNARY,
    frontend_pb.SetGradeRequest,
    frontend_pb.SetGradeReply,
    (request: frontend_pb.SetGradeRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.SetGradeReply.deserializeBinary
  );

  setStudentGrade(
    request: frontend_pb.SetGradeRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.SetGradeReply>;

  setStudentGrade(
    request: frontend_pb.SetGradeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.SetGradeReply) => void): grpcWeb.ClientReadableStream<frontend_pb.SetGradeReply>;

  setStudentGrade(
    request: frontend_pb.SetGradeRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.SetGradeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/SetStudentGrade',
        request,
        metadata || {},
        this.methodDescriptorSetStudentGrade,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/SetStudentGrade',
    request,
    metadata || {},
    this.methodDescriptorSetStudentGrade);
  }

  methodDescriptorSendEmail = new grpcWeb.MethodDescriptor(
    '/SDMS_Backend/SendEmail',
    grpcWeb.MethodType.UNARY,
    frontend_pb.EmailRequest,
    frontend_pb.EmailReply,
    (request: frontend_pb.EmailRequest) => {
      return request.serializeBinary();
    },
    frontend_pb.EmailReply.deserializeBinary
  );

  sendEmail(
    request: frontend_pb.EmailRequest,
    metadata?: grpcWeb.Metadata | null): Promise<frontend_pb.EmailReply>;

  sendEmail(
    request: frontend_pb.EmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: frontend_pb.EmailReply) => void): grpcWeb.ClientReadableStream<frontend_pb.EmailReply>;

  sendEmail(
    request: frontend_pb.EmailRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: frontend_pb.EmailReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SDMS_Backend/SendEmail',
        request,
        metadata || {},
        this.methodDescriptorSendEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SDMS_Backend/SendEmail',
    request,
    metadata || {},
    this.methodDescriptorSendEmail);
  }

}


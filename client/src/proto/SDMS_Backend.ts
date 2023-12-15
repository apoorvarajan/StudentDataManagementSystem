// Original file: ../protos/frontend.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BrowseReply as _BrowseReply, BrowseReply__Output as _BrowseReply__Output } from './BrowseReply';
import type { BrowseRequest as _BrowseRequest, BrowseRequest__Output as _BrowseRequest__Output } from './BrowseRequest';
import type { CurrentCoursesReply as _CurrentCoursesReply, CurrentCoursesReply__Output as _CurrentCoursesReply__Output } from './CurrentCoursesReply';
import type { EmailReply as _EmailReply, EmailReply__Output as _EmailReply__Output } from './EmailReply';
import type { EmailRequest as _EmailRequest, EmailRequest__Output as _EmailRequest__Output } from './EmailRequest';
import type { IDRequest as _IDRequest, IDRequest__Output as _IDRequest__Output } from './IDRequest';
import type { LoginReply as _LoginReply, LoginReply__Output as _LoginReply__Output } from './LoginReply';
import type { LoginRequest as _LoginRequest, LoginRequest__Output as _LoginRequest__Output } from './LoginRequest';
import type { RequirementReply as _RequirementReply, RequirementReply__Output as _RequirementReply__Output } from './RequirementReply';
import type { RequirementRequest as _RequirementRequest, RequirementRequest__Output as _RequirementRequest__Output } from './RequirementRequest';
import type { SetGradeReply as _SetGradeReply, SetGradeReply__Output as _SetGradeReply__Output } from './SetGradeReply';
import type { SetGradeRequest as _SetGradeRequest, SetGradeRequest__Output as _SetGradeRequest__Output } from './SetGradeRequest';
import type { StudentDetailsReply as _StudentDetailsReply, StudentDetailsReply__Output as _StudentDetailsReply__Output } from './StudentDetailsReply';

export interface SDMS_BackendClient extends grpc.Client {
  GetCourseRequirements(argument: _RequirementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  GetCourseRequirements(argument: _RequirementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  GetCourseRequirements(argument: _RequirementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  GetCourseRequirements(argument: _RequirementRequest, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  getCourseRequirements(argument: _RequirementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  getCourseRequirements(argument: _RequirementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  getCourseRequirements(argument: _RequirementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  getCourseRequirements(argument: _RequirementRequest, callback: grpc.requestCallback<_RequirementReply__Output>): grpc.ClientUnaryCall;
  
  GetCourses(argument: _BrowseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  GetCourses(argument: _BrowseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  GetCourses(argument: _BrowseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  GetCourses(argument: _BrowseRequest, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  getCourses(argument: _BrowseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  getCourses(argument: _BrowseRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  getCourses(argument: _BrowseRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  getCourses(argument: _BrowseRequest, callback: grpc.requestCallback<_BrowseReply__Output>): grpc.ClientUnaryCall;
  
  GetStudentCourses(argument: _IDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  GetStudentCourses(argument: _IDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  GetStudentCourses(argument: _IDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  GetStudentCourses(argument: _IDRequest, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  getStudentCourses(argument: _IDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  getStudentCourses(argument: _IDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  getStudentCourses(argument: _IDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  getStudentCourses(argument: _IDRequest, callback: grpc.requestCallback<_CurrentCoursesReply__Output>): grpc.ClientUnaryCall;
  
  GetStudentDetails(argument: _IDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  GetStudentDetails(argument: _IDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  GetStudentDetails(argument: _IDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  GetStudentDetails(argument: _IDRequest, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  getStudentDetails(argument: _IDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  getStudentDetails(argument: _IDRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  getStudentDetails(argument: _IDRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  getStudentDetails(argument: _IDRequest, callback: grpc.requestCallback<_StudentDetailsReply__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, callback: grpc.requestCallback<_LoginReply__Output>): grpc.ClientUnaryCall;
  
  SendEmail(argument: _EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  SendEmail(argument: _EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  SendEmail(argument: _EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  SendEmail(argument: _EmailRequest, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  sendEmail(argument: _EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  sendEmail(argument: _EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  sendEmail(argument: _EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  sendEmail(argument: _EmailRequest, callback: grpc.requestCallback<_EmailReply__Output>): grpc.ClientUnaryCall;
  
  SetStudentGrade(argument: _SetGradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  SetStudentGrade(argument: _SetGradeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  SetStudentGrade(argument: _SetGradeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  SetStudentGrade(argument: _SetGradeRequest, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  setStudentGrade(argument: _SetGradeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  setStudentGrade(argument: _SetGradeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  setStudentGrade(argument: _SetGradeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  setStudentGrade(argument: _SetGradeRequest, callback: grpc.requestCallback<_SetGradeReply__Output>): grpc.ClientUnaryCall;
  
}

export interface SDMS_BackendHandlers extends grpc.UntypedServiceImplementation {
  GetCourseRequirements: grpc.handleUnaryCall<_RequirementRequest__Output, _RequirementReply>;
  
  GetCourses: grpc.handleUnaryCall<_BrowseRequest__Output, _BrowseReply>;
  
  GetStudentCourses: grpc.handleUnaryCall<_IDRequest__Output, _CurrentCoursesReply>;
  
  GetStudentDetails: grpc.handleUnaryCall<_IDRequest__Output, _StudentDetailsReply>;
  
  Login: grpc.handleUnaryCall<_LoginRequest__Output, _LoginReply>;
  
  SendEmail: grpc.handleUnaryCall<_EmailRequest__Output, _EmailReply>;
  
  SetStudentGrade: grpc.handleUnaryCall<_SetGradeRequest__Output, _SetGradeReply>;
  
}

export interface SDMS_BackendDefinition extends grpc.ServiceDefinition {
  GetCourseRequirements: MethodDefinition<_RequirementRequest, _RequirementReply, _RequirementRequest__Output, _RequirementReply__Output>
  GetCourses: MethodDefinition<_BrowseRequest, _BrowseReply, _BrowseRequest__Output, _BrowseReply__Output>
  GetStudentCourses: MethodDefinition<_IDRequest, _CurrentCoursesReply, _IDRequest__Output, _CurrentCoursesReply__Output>
  GetStudentDetails: MethodDefinition<_IDRequest, _StudentDetailsReply, _IDRequest__Output, _StudentDetailsReply__Output>
  Login: MethodDefinition<_LoginRequest, _LoginReply, _LoginRequest__Output, _LoginReply__Output>
  SendEmail: MethodDefinition<_EmailRequest, _EmailReply, _EmailRequest__Output, _EmailReply__Output>
  SetStudentGrade: MethodDefinition<_SetGradeRequest, _SetGradeReply, _SetGradeRequest__Output, _SetGradeReply__Output>
}

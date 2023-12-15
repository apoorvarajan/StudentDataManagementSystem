import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SDMS_BackendClient as _SDMS_BackendClient, SDMS_BackendDefinition as _SDMS_BackendDefinition } from './SDMS_Backend';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Address: MessageTypeDefinition
  BrowseReply: MessageTypeDefinition
  BrowseRequest: MessageTypeDefinition
  Course: MessageTypeDefinition
  CurrentCourse: MessageTypeDefinition
  CurrentCoursesReply: MessageTypeDefinition
  EmailReply: MessageTypeDefinition
  EmailRequest: MessageTypeDefinition
  IDRequest: MessageTypeDefinition
  LoginReply: MessageTypeDefinition
  LoginRequest: MessageTypeDefinition
  Name: MessageTypeDefinition
  PreviousCourse: MessageTypeDefinition
  RequirementReply: MessageTypeDefinition
  RequirementRequest: MessageTypeDefinition
  SDMS_Backend: SubtypeConstructor<typeof grpc.Client, _SDMS_BackendClient> & { service: _SDMS_BackendDefinition }
  SetGradeReply: MessageTypeDefinition
  SetGradeRequest: MessageTypeDefinition
  StudentDetailsReply: MessageTypeDefinition
}


import * as jspb from 'google-protobuf'



export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    message: string,
  }
}

export class GradeRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GradeRequest;

  getCourseCode(): string;
  setCourseCode(value: string): GradeRequest;

  getToken(): string;
  setToken(value: string): GradeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GradeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GradeRequest): GradeRequest.AsObject;
  static serializeBinaryToWriter(message: GradeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GradeRequest;
  static deserializeBinaryFromReader(message: GradeRequest, reader: jspb.BinaryReader): GradeRequest;
}

export namespace GradeRequest {
  export type AsObject = {
    userId: string,
    courseCode: string,
    token: string,
  }
}

export class GradeReply extends jspb.Message {
  getGrade(): string;
  setGrade(value: string): GradeReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GradeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GradeReply): GradeReply.AsObject;
  static serializeBinaryToWriter(message: GradeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GradeReply;
  static deserializeBinaryFromReader(message: GradeReply, reader: jspb.BinaryReader): GradeReply;
}

export namespace GradeReply {
  export type AsObject = {
    grade: string,
  }
}


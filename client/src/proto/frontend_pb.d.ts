import * as jspb from 'google-protobuf';




export class LoginRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getRole(): string;
  setRole(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    userId: string,
    password: string,
    role: string,
  }
}

export class LoginReply extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): LoginReply;

  getToken(): string;
  setToken(value: string): LoginReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    status: string,
    token: string,
  }
}

export class IDRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): IDRequest;

  getUserId(): string;
  setUserId(value: string): IDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IDRequest): IDRequest.AsObject;
  static serializeBinaryToWriter(message: IDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDRequest;
  static deserializeBinaryFromReader(message: IDRequest, reader: jspb.BinaryReader): IDRequest;
}

export namespace IDRequest {
  export type AsObject = {
    token: string,
    userId: string,
  }
}

export class StudentDetailsReply extends jspb.Message {
  getName(): Name | undefined;
  setName(value?: Name): StudentDetailsReply;
  hasName(): boolean;
  clearName(): StudentDetailsReply;

  getEmailId(): string;
  setEmailId(value: string): StudentDetailsReply;

  getAddress(): Address | undefined;
  setAddress(value?: Address): StudentDetailsReply;
  hasAddress(): boolean;
  clearAddress(): StudentDetailsReply;

  getPhone(): string;
  setPhone(value: string): StudentDetailsReply;

  getAdvisor(): string;
  setAdvisor(value: string): StudentDetailsReply;

  getDept(): string;
  setDept(value: string): StudentDetailsReply;

  getDegree(): string;
  setDegree(value: string): StudentDetailsReply;

  getGpa(): number;
  setGpa(value: number): StudentDetailsReply;

  getGradSem(): string;
  setGradSem(value: string): StudentDetailsReply;

  getGradYear(): number;
  setGradYear(value: number): StudentDetailsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StudentDetailsReply.AsObject;
  static toObject(includeInstance: boolean, msg: StudentDetailsReply): StudentDetailsReply.AsObject;
  static serializeBinaryToWriter(message: StudentDetailsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StudentDetailsReply;
  static deserializeBinaryFromReader(message: StudentDetailsReply, reader: jspb.BinaryReader): StudentDetailsReply;
}

export namespace StudentDetailsReply {
  export type AsObject = {
    name?: Name.AsObject,
    emailId: string,
    address?: Address.AsObject,
    phone: string,
    advisor: string,
    dept: string,
    degree: string,
    gpa: number,
    gradSem: string,
    gradYear: number,
  }
}

export class Name extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): Name;

  getMiddleName(): string;
  setMiddleName(value: string): Name;

  getLastName(): string;
  setLastName(value: string): Name;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Name.AsObject;
  static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
  static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Name;
  static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
  export type AsObject = {
    firstName: string,
    middleName: string,
    lastName: string,
  }
}

export class Address extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): Address;

  getCity(): string;
  setCity(value: string): Address;

  getState(): string;
  setState(value: string): Address;

  getZip(): string;
  setZip(value: string): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    line1: string,
    city: string,
    state: string,
    zip: string,
  }
}

export class CurrentCoursesReply extends jspb.Message {
  getCourseList(): Array<CurrentCourse>;
  setCourseList(value: Array<CurrentCourse>): CurrentCoursesReply;
  clearCourseList(): CurrentCoursesReply;
  addCourse(value?: CurrentCourse, index?: number): CurrentCourse;

  getPrevCourseList(): Array<PreviousCourse>;
  setPrevCourseList(value: Array<PreviousCourse>): CurrentCoursesReply;
  clearPrevCourseList(): CurrentCoursesReply;
  addPrevCourse(value?: PreviousCourse, index?: number): PreviousCourse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentCoursesReply.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentCoursesReply): CurrentCoursesReply.AsObject;
  static serializeBinaryToWriter(message: CurrentCoursesReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentCoursesReply;
  static deserializeBinaryFromReader(message: CurrentCoursesReply, reader: jspb.BinaryReader): CurrentCoursesReply;
}

export namespace CurrentCoursesReply {
  export type AsObject = {
    courseList: Array<CurrentCourse.AsObject>,
    prevCourseList: Array<PreviousCourse.AsObject>,
  }
}

export class CurrentCourse extends jspb.Message {
  getCourseNumber(): string;
  setCourseNumber(value: string): CurrentCourse;

  getDept(): string;
  setDept(value: string): CurrentCourse;

  getNCredits(): number;
  setNCredits(value: number): CurrentCourse;

  getCourseName(): string;
  setCourseName(value: string): CurrentCourse;

  getInstructorsList(): Array<string>;
  setInstructorsList(value: Array<string>): CurrentCourse;
  clearInstructorsList(): CurrentCourse;
  addInstructors(value: string, index?: number): CurrentCourse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentCourse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentCourse): CurrentCourse.AsObject;
  static serializeBinaryToWriter(message: CurrentCourse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentCourse;
  static deserializeBinaryFromReader(message: CurrentCourse, reader: jspb.BinaryReader): CurrentCourse;
}

export namespace CurrentCourse {
  export type AsObject = {
    courseNumber: string,
    dept: string,
    nCredits: number,
    courseName: string,
    instructorsList: Array<string>,
  }
}

export class PreviousCourse extends jspb.Message {
  getCourseNumber(): string;
  setCourseNumber(value: string): PreviousCourse;

  getDept(): string;
  setDept(value: string): PreviousCourse;

  getNCredits(): number;
  setNCredits(value: number): PreviousCourse;

  getCourseName(): string;
  setCourseName(value: string): PreviousCourse;

  getGrade(): string;
  setGrade(value: string): PreviousCourse;

  getSemester(): string;
  setSemester(value: string): PreviousCourse;

  getYear(): number;
  setYear(value: number): PreviousCourse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviousCourse.AsObject;
  static toObject(includeInstance: boolean, msg: PreviousCourse): PreviousCourse.AsObject;
  static serializeBinaryToWriter(message: PreviousCourse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviousCourse;
  static deserializeBinaryFromReader(message: PreviousCourse, reader: jspb.BinaryReader): PreviousCourse;
}

export namespace PreviousCourse {
  export type AsObject = {
    courseNumber: string,
    dept: string,
    nCredits: number,
    courseName: string,
    grade: string,
    semester: string,
    year: number,
  }
}

export class RequirementRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): RequirementRequest;

  getCourseIdList(): Array<string>;
  setCourseIdList(value: Array<string>): RequirementRequest;
  clearCourseIdList(): RequirementRequest;
  addCourseId(value: string, index?: number): RequirementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequirementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequirementRequest): RequirementRequest.AsObject;
  static serializeBinaryToWriter(message: RequirementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequirementRequest;
  static deserializeBinaryFromReader(message: RequirementRequest, reader: jspb.BinaryReader): RequirementRequest;
}

export namespace RequirementRequest {
  export type AsObject = {
    token: string,
    courseIdList: Array<string>,
  }
}

export class RequirementReply extends jspb.Message {
  getProgress(): string;
  setProgress(value: string): RequirementReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequirementReply.AsObject;
  static toObject(includeInstance: boolean, msg: RequirementReply): RequirementReply.AsObject;
  static serializeBinaryToWriter(message: RequirementReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequirementReply;
  static deserializeBinaryFromReader(message: RequirementReply, reader: jspb.BinaryReader): RequirementReply;
}

export namespace RequirementReply {
  export type AsObject = {
    progress: string,
  }
}

export class BrowseRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): BrowseRequest;

  getDegree(): string;
  setDegree(value: string): BrowseRequest;

  getDept(): string;
  setDept(value: string): BrowseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BrowseRequest): BrowseRequest.AsObject;
  static serializeBinaryToWriter(message: BrowseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowseRequest;
  static deserializeBinaryFromReader(message: BrowseRequest, reader: jspb.BinaryReader): BrowseRequest;
}

export namespace BrowseRequest {
  export type AsObject = {
    token: string,
    degree: string,
    dept: string,
  }
}

export class BrowseReply extends jspb.Message {
  getCourseList(): Array<Course>;
  setCourseList(value: Array<Course>): BrowseReply;
  clearCourseList(): BrowseReply;
  addCourse(value?: Course, index?: number): Course;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowseReply.AsObject;
  static toObject(includeInstance: boolean, msg: BrowseReply): BrowseReply.AsObject;
  static serializeBinaryToWriter(message: BrowseReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowseReply;
  static deserializeBinaryFromReader(message: BrowseReply, reader: jspb.BinaryReader): BrowseReply;
}

export namespace BrowseReply {
  export type AsObject = {
    courseList: Array<Course.AsObject>,
  }
}

export class Course extends jspb.Message {
  getCourseNumber(): string;
  setCourseNumber(value: string): Course;

  getDept(): string;
  setDept(value: string): Course;

  getNCredits(): number;
  setNCredits(value: number): Course;

  getCourseName(): string;
  setCourseName(value: string): Course;

  getDescription(): string;
  setDescription(value: string): Course;

  getReqSatisfiedList(): Array<string>;
  setReqSatisfiedList(value: Array<string>): Course;
  clearReqSatisfiedList(): Course;
  addReqSatisfied(value: string, index?: number): Course;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Course.AsObject;
  static toObject(includeInstance: boolean, msg: Course): Course.AsObject;
  static serializeBinaryToWriter(message: Course, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Course;
  static deserializeBinaryFromReader(message: Course, reader: jspb.BinaryReader): Course;
}

export namespace Course {
  export type AsObject = {
    courseNumber: string,
    dept: string,
    nCredits: number,
    courseName: string,
    description: string,
    reqSatisfiedList: Array<string>,
  }
}


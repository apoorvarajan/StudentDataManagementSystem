// Original file: ../protos/frontend.proto

import type { Name as _Name, Name__Output as _Name__Output } from './Name';
import type { Address as _Address, Address__Output as _Address__Output } from './Address';

export interface StudentDetailsReply {
  'name'?: (_Name | null);
  'emailId'?: (string);
  'address'?: (_Address | null);
  'phone'?: (string);
  'advisor'?: (string);
  'dept'?: (string);
  'degree'?: (string);
  'gpa'?: (number | string);
  'gradSem'?: (string);
  'gradYear'?: (number);
}

export interface StudentDetailsReply__Output {
  'name': (_Name__Output | null);
  'emailId': (string);
  'address': (_Address__Output | null);
  'phone': (string);
  'advisor': (string);
  'dept': (string);
  'degree': (string);
  'gpa': (number);
  'gradSem': (string);
  'gradYear': (number);
}

// Original file: ../protos/frontend.proto


export interface Course {
  'courseNumber'?: (string);
  'dept'?: (string);
  'nCredits'?: (number);
  'courseName'?: (string);
  'description'?: (string);
  'reqSatisfied'?: (string)[];
}

export interface Course__Output {
  'courseNumber': (string);
  'dept': (string);
  'nCredits': (number);
  'courseName': (string);
  'description': (string);
  'reqSatisfied': (string)[];
}

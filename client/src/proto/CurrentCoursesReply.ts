// Original file: ../protos/frontend.proto

import type { CurrentCourse as _CurrentCourse, CurrentCourse__Output as _CurrentCourse__Output } from './CurrentCourse';
import type { PreviousCourse as _PreviousCourse, PreviousCourse__Output as _PreviousCourse__Output } from './PreviousCourse';

export interface CurrentCoursesReply {
  'course'?: (_CurrentCourse)[];
  'prevCourse'?: (_PreviousCourse)[];
}

export interface CurrentCoursesReply__Output {
  'course': (_CurrentCourse__Output)[];
  'prevCourse': (_PreviousCourse__Output)[];
}

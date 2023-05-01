import {Employer} from "./Employer";
import {Classroom} from "./classroom";
import {Subject} from "./Subject";
import {Class} from "./Class";

export class Lesson{
  idLesson!:number;
  start!:Date;
  end!:Date;
  employer!:Employer;
  classroom!:Classroom;
  subject!:Subject;
  aClass!:Class;

}

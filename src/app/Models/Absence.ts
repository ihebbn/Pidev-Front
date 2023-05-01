import {Student} from "./Student";
import {Lesson} from "./Lesson";

export class Absence{
  idAbsence!:number;
  dateAbsence!:Date;
  motif!:string;
  validee!:boolean;
  student!:Student;
  lesson!:Lesson;
}

import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/Student";
import {AbsenceService} from "../../Services/Absence.service";

@Component({
  selector: 'app-verifabsence',
  templateUrl: './verifabsence.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class VerifabsenceComponent implements OnInit {
  public student!: Student;

  constructor(private absenceervice: AbsenceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
  this.absenceervice.verifierSeuilAbsence(this.student.idStudent).subscribe(data => {
   console.log(data);},error => {console.log(error);});}

}

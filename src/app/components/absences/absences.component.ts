import { Component, OnInit } from '@angular/core';
import {Absence} from "../../Models/Absence";
import {AbsenceService} from "../../Services/Absence.service";
import {Student} from "../../Models/Student";

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class AbsencesComponent implements OnInit {
  public absences: Absence[] = [];
  p: number = 1;


  constructor(private absenceervice: AbsenceService) {
  }

  ngOnInit(): void {
    this.absenceervice.getAbsence()
      .subscribe(res => {
        this.absences = res;
        console.log(this.absences)
      })
  }

  OndeleteClick(id: number) {
    this.absenceervice.deleteAbsence(id).subscribe();
  }

  refreshPage() {
    window.location.reload();
  }

  onUpdateClick(idAbs: number): void {
    // Code to get updatedPublication...
    const updatedAbsence: {} = { /* ... */};
    this.absenceervice.updateAbsence(idAbs, updatedAbsence)
      .subscribe((result) => {
        console.log('Absence updated:', result);
      });
  }

  onSaveClick(Abs: Absence) {
    this.absenceervice.updateAbsence(Abs.idAbsence, Abs)
      .subscribe(() => console.log('Absence updated successfully'));
  }






}

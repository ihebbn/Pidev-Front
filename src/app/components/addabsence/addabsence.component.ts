import { Component, OnInit } from '@angular/core';
import {Absence} from "../../Models/Absence";
import {AbsenceService} from "../../Services/Absence.service";

@Component({
  selector: 'app-addabsence',
  templateUrl: './addabsence.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class AddabsenceComponent {
  absence : Absence = new Absence();
  errorMessage = '';

  constructor( private absenceservice : AbsenceService) { }

  onSubmit(): void {
    this.absenceservice.addAbsence(this.absence)
      .subscribe(
        addedAbsence => {
          console.log('Absence ajoutée avec succès : ', addedAbsence);
          this.absence = new Absence();
          this.errorMessage = '';
        },
        error => {
          console.error('Erreur lors de l\'ajout de la absence : ', error);
          this.errorMessage = error;
        }
      );

  }

}

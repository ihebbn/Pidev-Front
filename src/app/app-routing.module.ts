import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from "./components/back/back.component";
import {HomeComponent} from "./components/home/home.component";
import {AbsencesComponent} from "./components/absences/absences.component";
import {LessonComponent} from "./components/lesson/lesson.component";
import {VerifabsenceComponent} from "./components/verifabsence/verifabsence.component";
import {AddabsenceComponent} from "./components/addabsence/addabsence.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'absence',component:AbsencesComponent},
  {path:'lesson',component:LessonComponent},
  {path:'verif',component:VerifabsenceComponent},
  {path:'addabsence',component:AddabsenceComponent},
  {path:'back',component:BackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

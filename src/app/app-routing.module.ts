import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from "./components/back/back.component";
import {HomeComponent} from "./components/home/home.component";
import {AbsencesComponent} from "./components/absences/absences.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'absence',component:AbsencesComponent},
  {path:'back',component:BackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

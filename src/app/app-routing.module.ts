import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from "./components/back/back.component";
import {HomeComponent} from "./components/home/home.component";
import { AppointmentComponent } from './components/appointment/appointment.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'',component:HomeComponent},
  {path:'Appointment',component:AppointmentComponent},
  {path:'back',component:BackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

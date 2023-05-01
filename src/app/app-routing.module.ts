import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from "./components/back/back.component";
import {HomeComponent} from "./components/home/home.component";
import { AppointmentComponent } from './components/appointment/appointment.component';
import { StudentComponent } from './components/student/student.component';
import { AddUserComponentComponent } from './components/add-user-component/add-user-component.component';
import { AdmissionComponent } from './components/admission/admission.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'adduser', component: AddUserComponentComponent},
  {path:'student',component:StudentComponent},
  {path:'admission',component:AdmissionComponent},
 
  {path:'Appointment',component:AppointmentComponent},
  {path:'back',component:BackComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AfficheEventComponent } from './components/affiche-event/affiche-event.component';
import {BackComponent} from "./components/back/back.component";
import { EventComponent } from './components/event/event.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'back', component: BackComponent },
  { path: 'app-add-event', component: EventComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'affiche-event', component: AfficheEventComponent }

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

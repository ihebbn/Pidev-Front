import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackComponent } from './components/back/back.component';
import { AbsencesComponent } from './components/absences/absences.component';
import {HttpClientModule} from "@angular/common/http";
import { LessonComponent } from './components/lesson/lesson.component';
import {FormsModule} from "@angular/forms";
import { VerifabsenceComponent } from './components/verifabsence/verifabsence.component';
import { AddabsenceComponent } from './components/addabsence/addabsence.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BackComponent,
    AbsencesComponent,
    LessonComponent,
    VerifabsenceComponent,
    AddabsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

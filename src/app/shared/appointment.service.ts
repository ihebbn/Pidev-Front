import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
rdvUrl="http://localhost:8090/pidev/Rdv/getRdv";
studentUrl="http://localhost:8090/pidev/Etudiant/getStudent";
rdvUrll="http://localhost:8090/pidev/Rdv/showAvailableDays"
  constructor(private _http:HttpClient) { }
  getRdvName() : Observable<any[]> {
    return this._http.get<any[]>(this.rdvUrl);
    }
    getStudent(): Observable<any[]> {
      return this._http.get<any[]>(this.studentUrl);
    }
    deleteStudent(idStudent:number){
   
      return this._http.delete("http://localhost:8090/pidev/Etudiant/delete/"+idStudent);
    }

    deleteRdv(idRdv:number){
      return this._http.delete("http://localhost:8090/pidev/Rdv/delete/"+idRdv);
    }
    
    addStudent(student:any){
      return this._http.post<any>("http://localhost:8090/pidev/Etudiant/addStudent",student);
    }
    getAvaiDays(time:any) {

      return this._http.get("http://localhost:8090/pidev/Rdv/showAvailableDays?time=10:30");
    
    }
  //http://localhost:8090/pidev/Rdv/showAvailableDays


    
    

    
}

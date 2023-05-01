import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
rdvUrl="http://localhost:8090/pidev/Rdv/getRdv";
studentUrl="http://localhost:8090/pidev/Etudiant/getStudent";

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
}

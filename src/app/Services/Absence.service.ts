import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Absence} from "../Models/Absence";
import {map, Observable} from "rxjs";
import {Student} from "../Models/Student";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {


  constructor(private http : HttpClient) { }

  addAbsence(absence: Absence): Observable<Absence> {
    const url = `http://localhost:8089/pidev/addAbsence`;
    return this.http.post<Absence>(url, absence);
  }

  getAbsence(){
    return this.http.get<Absence[]>("http://localhost:8089/pidev/retrieve-all-Absence")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  deleteAbsence(id:number){
    const url = `http://localhost:8089/pidev/${id}`;
    return this.http.delete(url);
  }

  updateAbsence(idAbs: number, updatedAbsence: {}) {
    return this.http.put(`http://localhost:8089/pidev/absences/${idAbs}`, updatedAbsence);
  }

  verifierSeuilAbsence(etudiantId: number) : Observable<any> {
    return this.http.get(`http://localhost:8089/pidev/etudiant/absence/${etudiantId}`);}


}

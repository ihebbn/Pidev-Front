import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Absence} from "../Models/Absence";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  constructor(private http : HttpClient) { }

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

}

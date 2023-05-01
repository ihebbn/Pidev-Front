import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../Models/Lesson";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http : HttpClient) { }

  getLesson(){
    return this.http.get<Lesson[]>("http://localhost:8089/pidev/retrieve-all-Lesson")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  deleteLesson(id:number){
    const url = `http://localhost:8089/pidev/Lesson/${id}`;
    return this.http.delete(url);
  }

}

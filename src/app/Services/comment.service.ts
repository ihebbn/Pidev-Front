import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Comment} from "../Models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  getComments(){
    return this.http.get<Comment[]>("http://localhost:8089/pidev/comment/retrieve-all-comments")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  deleteComment(id:number){
    const url = `http://localhost:8089/pidev/comment/remove-comment/${id}`;
    return this.http.delete(url);
  }

}

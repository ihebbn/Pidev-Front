import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Publication} from "../Models/Publication";
import {map, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getPosts(){
    return this.http.get<Publication[]>("http://localhost:8089/pidev/Publication/retrieve-all-posts")
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  addPublication(publication: Publication): Observable<Publication> {
    const url = `http://localhost:8089/pidev/Publication/add-pub`;
    return this.http.post<Publication>(url, publication);
  }
  deletePub(id:number){
    const url = `http://localhost:8089/pidev/Publication/remove-post/${id}`;
    return this.http.delete(url);
  }

  updatePublication(idPub: number, updatedPublication: {}) {
    return this.http.put(`http://localhost:8089/pidev/Publication/publications/${idPub}`, updatedPublication);
  }

}

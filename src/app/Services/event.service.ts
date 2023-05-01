import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Event } from "../Models/event";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvent() {
    return this.http.get<Event[]>("http://localhost:8089/pidev/retrieve-all-events")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteEvent(id: number) {
    const url = `http://localhost:8089/pidev/remove-event/${id}`;
    return this.http.delete(url);
  }

  addEvent(event: Event): Observable<Event> {
    const url = `http://localhost:8089/pidev/addEvent`;
    return this.http.post<Event>(url, event);
  }


}

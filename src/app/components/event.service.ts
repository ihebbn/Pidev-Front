import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8089/api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  updateEvent(event: Event): Observable<Event> {
    const url = `${this.apiUrl}/${event.idEvent}`;
    return this.http.put<Event>(url, event);
  }

  deleteEvent(idEvent: number): Observable<any> {
    const url = `${this.apiUrl}/${idEvent}`;
    return this.http.delete(url);
  }
}

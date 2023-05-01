import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../Models/event';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']

})
export class EventComponent implements OnInit {

  public events: Event[] = [];

  constructor(private eventservice: EventService) {
      
  }

  ngOnInit(): void {
    this.afficher()
    console.log(this.afficher);
  }

  afficher() {

    


    this.eventservice.getEvent().subscribe((response: any) => {
      this.events = response;
      console.log("jjgjh", this.events);

      
    },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  delete(i: any) {
    this.events.splice(i, 1);
  }

  deletedev(id: number) {
    if (confirm("Do you really want to delete this item?")) {
      this.eventservice.deleteEvent(id).subscribe(() => {
        this.events.forEach((e, index) => {
          if (e.idEvent === id) {
            this.events.splice(index, 1);
          }
        });
      });
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Event } from '../../Models/event';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  newEvent: Event = new Event(); // create a new event object to hold form data

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.eventService.addEvent(this.newEvent).subscribe(
      response => {
        console.log(response); // log the server's response to the console
      },
      error => {
        console.log(error); // log any errors to the console
      }
    );
  }


}

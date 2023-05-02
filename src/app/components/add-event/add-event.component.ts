import { Component, OnInit } from '@angular/core';
import { Event } from '../../Models/event';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']

})
export class AddEventComponent implements OnInit {

  newEvent: Event = new Event(); // create a new event object to hold form data
   
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submitting form:', this.newEvent);
    this.eventService.addEvent(this.newEvent).subscribe(
      response => {
        console.log('Server response:', response);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  addevent() {
    this.eventService.addPlan(this.newEvent).subscribe();
    this.newEvent = new Event();
  }

}

import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventService) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  addEvent(name: string, type: string, description: string, place: string, date: Date, nbr_of_places: number): void {
    const newEvent = { nameEvent: name, Type: type, description: description, place: place, date: date, nbr_of_places: nbr_of_places };
    this.eventService.addEvent(newEvent)
      .subscribe(event => {
        console.log(`Event with ID ${event.idEvent} has been added`);
        // Do something with the new event
      });
  }
}

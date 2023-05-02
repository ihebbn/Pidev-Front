import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-affiche-event',
  templateUrl: './affiche-event.component.html',
  styleUrls: ['./affiche-event.component.css']
})
export class AfficheEventComponent implements OnInit {

  events!: any;

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

}

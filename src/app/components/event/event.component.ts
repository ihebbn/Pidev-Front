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

   events!: any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
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

  

  reloadData() {
    this.events = this.eventservice.getEvent();
  }

  OndeleteClick = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce poste?')) {
      this.eventservice.deleteEvent(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.afficher();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.afficher();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../Models/event';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor(private service: EventService, private route: ActivatedRoute, private routerNav: Router) {
    this.id = this.route.snapshot.params['id'];
    this.service.getEventById(this.id).subscribe(res => {
      console.log(res)
      this.obj = res
      this.uevent = this.obj
      console.log('-----------', this.uevent)
    })
  }
  id: any
  obj: any = {}
  uevent: Event = new Event()

  ngOnInit(): void {
  }
  updateevent() {

    console.log(this.uevent)
    this.service.updateevent(this.uevent).subscribe(res => {
      console.log(res)
      this.routerNav.navigate(['/listevents'])
    }, err => {
      this.routerNav.navigate(['/listevents'])

    })
  }

}



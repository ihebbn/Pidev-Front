import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class AppointmentComponent implements OnInit {
  listRdv!: any[]
  constructor(private serv:AppointmentService) { }

  ngOnInit(): void {
  this.getRdv()
  }
getRdv(){
  this.serv.getRdvName().subscribe(data=>{
    this.listRdv=data
    console.log(this.listRdv)
  })
}
}

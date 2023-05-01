import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
days!:any
  constructor(private serv :AppointmentService) { }

  ngOnInit(): void {
    this.getAvaiDays()
  }
  getAvaiDays(){
    this.serv.getAvaiDays('10:30').subscribe(data=>{
      this.days=data
      console.log("**************************",data)
    })
  }
  
}

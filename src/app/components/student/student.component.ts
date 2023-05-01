import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
listStudent!:any[]
  constructor(private serv:AppointmentService) { }

  ngOnInit(): void {
    this.getStudent ()
  
  }
getStudent(){
  this.serv.getStudent().subscribe(data=>{
this.listStudent=data
console.log(this.listStudent)
  })
}
DeleteStudent(idStudent : number){
  this.serv.deleteStudent(idStudent).subscribe(()=> this.serv.getStudent().subscribe(res=> {this.listStudent=res}));
}

}
 
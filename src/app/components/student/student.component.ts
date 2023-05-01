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
    this.deleteUser
  }
getStudent(){
  this.serv.getStudent().subscribe(data=>{
this.listStudent=data
console.log(this.listStudent)
  })
}
deleteUser(id: number) {
  this.serv.deleteUserById(id).subscribe(() => {
    console.log('Utilisateur supprimé avec succès')})
  }

}

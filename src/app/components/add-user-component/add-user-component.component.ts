import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/Student';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.css']
})
export class AddUserComponentComponent implements OnInit {
  student : Student=new Student();
  formStudent!:FormGroup
  days!:any
  constructor(private serv :AppointmentService, private _router:Router,private fb:FormBuilder) { }


  ngOnInit(): void {
    this.formStudent =this.fb.group({
      id_student:[''],
      Firstname:[''],
      Email:[''],
      Address :[''],
      Contact :[''],
      Age:[''],
      description_and_motivation :[''],
      level:[''],
     //  Lastname[''],

    })
  }
   addUser(){
     this.serv.addStudent(this.formStudent.value).subscribe(()=>{

      console.log(this.formStudent.value)
      //this._router.navigateByUrl("/home/listuser")
    });
 }

}

import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../Models/Lesson";
import {LessonService} from "../../Services/Lesson.service";


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class LessonComponent implements OnInit {
  public lessons : Lesson[]=[];

  constructor( private lessonservice : LessonService) { }

  ngOnInit(): void {
    this.lessonservice.getLesson()
      .subscribe(res=>{
        this.lessons = res;
        console.log(this.lessons)
      })
  }

  OndeleteClick(id : number){
    this.lessonservice.deleteLesson(id).subscribe();
  }

  refreshPage() {
    window.location.reload();
  }

}

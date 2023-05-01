import { Component, OnInit } from '@angular/core';
import {Publication} from "../../Models/Publication";
import {Comment} from "../../Models/Comment";
import {PostService} from "../../Services/post.service";
import {CommentService} from "../../Services/comment.service";

@Component({
  selector: 'app-comment-back',
  templateUrl: './comment-back.component.html',
  styleUrls: ['./comment-back.component.css']
})
export class CommentBackComponent implements OnInit {
  public comments : Comment[]=[];
  constructor(private comservice : CommentService) { }

  ngOnInit(): void {
    this.comservice.getComments()
      .subscribe(res=>{
        this.comments = res;
        console.log(this.comments)
      })
  }
  OndeleteClick(id : number){
    this.comservice.deleteComment(id).subscribe();
  }
}

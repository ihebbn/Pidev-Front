import { Component, OnInit } from '@angular/core';
import {PostService} from "../../Services/post.service";
import {Publication} from "../../Models/Publication";

@Component({
  selector: 'app-post-back',
  templateUrl: './post-back.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class PostBackComponent implements OnInit {
  public publications : Publication[]=[];
  public updatedPublication: Publication[]=[];

  constructor(private pubService : PostService) { }

  ngOnInit(): void {
    this.pubService.getPosts()
      .subscribe(res=>{
        this.publications = res;
        console.log(this.publications)
      })

  }

  OndeleteClick(id : number){
    this.pubService.deletePub(id).subscribe();
  }
  onUpdateClick(idPub: number): void {
    // Code to get updatedPublication...
    const updatedPublication: {} = { /* ... */ };
    this.pubService.updatePublication(idPub, updatedPublication)
      .subscribe((result) => {
        console.log('Publication updated:', result);
      });
  }
  onSaveClick(pub: Publication) {
    this.pubService.updatePublication(pub.idPub, pub)
      .subscribe(() => console.log('Publication updated successfully'));
  }


}

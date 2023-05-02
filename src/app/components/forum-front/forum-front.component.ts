import { Component, OnInit } from '@angular/core';
import {Publication} from "../../Models/Publication";
import {PostService} from "../../Services/post.service";

@Component({
  selector: 'app-forum-front',
  templateUrl: './forum-front.component.html',
  styleUrls: ['./forum-front.component.css']
})
export class ForumFrontComponent implements OnInit {
  public publications : Publication[]=[];
  constructor(private pubService : PostService) { }

  ngOnInit() {
    this.pubService.getPosts().subscribe(posts => {
      this.publications = posts;
    });
  }
  onlikeClicked(id: number) {
    this.pubService.likePost(id).subscribe(response => {
      console.log('Publication disliked', response);
      // Traitez la réponse ici si nécessaire
    }, error => {
      console.error('An error occurred while disliking the publication', error);
    });
  }
  onDislikeClicked(id: number) {
    this.pubService.dislikePost(id).subscribe(response => {
      console.log('Publication disliked', response);
      // Traitez la réponse ici si nécessaire
    }, error => {
      console.error('An error occurred while disliking the publication', error);
    });
  }
  refreshPage() {
    window.location.reload();
  }
  getRatingStars(rating: number): any[] {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('full');
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push('half');
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push('empty');
    }
    return stars;
  }



}

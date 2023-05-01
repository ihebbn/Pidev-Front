import { Component, OnInit } from '@angular/core';
import {Publication} from "../../Models/Publication";
import {PostService} from "../../Services/post.service";

@Component({
  selector: 'app-add-post-component',
  templateUrl: './add-post-component.component.html',
  styleUrls: ['../../../assets/back/css/styles.css']
})
export class AddPostComponentComponent {

  publication: Publication = new Publication();
    errorMessage = '';

  constructor(private pubService : PostService) { }

  onSubmit(): void {
    this.pubService.addPublication(this.publication)
      .subscribe(
        addedPublication => {
          console.log('Publication ajoutée avec succès : ', addedPublication);
          this.publication = new Publication();
          this.errorMessage = '';
        },
        error => {
          console.error('Erreur lors de l\'ajout de la publication : ', error);
          this.errorMessage = error;
        }
      );

  }
}

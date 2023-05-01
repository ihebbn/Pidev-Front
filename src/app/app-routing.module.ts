import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackComponent} from "./components/back/back.component";
import {HomeComponent} from "./components/home/home.component";
import {PostBackComponent} from "./components/post-back/post-back.component";
import {CommentBackComponent} from "./components/comment-back/comment-back.component";
import {AddPostComponentComponent} from "./components/add-post-component/add-post-component.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'back',component:BackComponent},
  {path:'back/posts',component:PostBackComponent},
  {path:'back/addposts',component:AddPostComponentComponent},
  {path:'back/comments',component:CommentBackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

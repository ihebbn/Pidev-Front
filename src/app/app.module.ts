import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackComponent } from './components/back/back.component';
import { PostBackComponent } from './components/post-back/post-back.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentBackComponent } from './components/comment-back/comment-back.component';
import { AddPostComponentComponent } from './components/add-post-component/add-post-component.component';
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { ForumFrontComponent } from './components/forum-front/forum-front.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BackComponent,
    PostBackComponent,
    CommentBackComponent,
    AddPostComponentComponent,
    ForumFrontComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

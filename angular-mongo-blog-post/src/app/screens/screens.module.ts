import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts/posts.component';
import { EditsComponent } from './edits/edits.component';

import { PostComponent  } from './../components/post/post.component';

import {AppRoutingModule } from './../app-routing.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';



@NgModule({
  declarations: [PostsComponent, EditsComponent, PostComponent, NewPostComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ScreensModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostService } from './../../core/services/post/post.service';
import { HttpService } from './../../core/services/http/http.service';
import { Post } from 'src/app/core/models/post.model';
import { PostComponent } from 'src/app/components/post/post.component';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.scss']
})
export class EditsComponent implements OnInit {
  public post: Post;
  public postForm: FormGroup;

  constructor(public postService: PostService, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.post = this.postService.post;
    this.buildForm();
  }

  public buildForm(){
    this.postForm = this.formBuilder.group({
      title: [this.post.title, [Validators.required]],
      description: [this.post.description, [Validators.required]]
    });

  }


  editPost(postForm: FormGroup){
    this.post = {
      _id: this.post._id,
      title: postForm.get('title').value,
      description: postForm.get('description').value
    };
    this.httpService.editPost(this.post).subscribe();
  }

  deletePost(){
    this.httpService.deletePost(this.post).subscribe();
  }

}

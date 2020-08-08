import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public postForm: FormGroup;
  public post: Post;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  addPost(postForm: FormGroup){
    this.post = {
      title: postForm.get('title').value,
      description: postForm.get('description').value
    };
    this.httpService.addPost(this.post).subscribe();
  }

}

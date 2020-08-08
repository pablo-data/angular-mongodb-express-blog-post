import { Component, OnInit, Input } from '@angular/core';

import { Post } from './../../core/models/post.model';
import {PostService} from './../../core/services/post/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  publicacion(post: Post){
    this.postService.enviarPost(post);
  }

}

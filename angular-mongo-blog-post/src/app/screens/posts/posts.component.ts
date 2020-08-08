import { Component, OnInit} from '@angular/core';
import { HttpService } from '../../core/services/http/http.service';

import { Post } from './../../core/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public post: Post;
  public posts: Post[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

   this.fetchPosts();
  }

  fetchPosts(){
    this.httpService.getAllPost().subscribe((post: Post[]) => {
      this.posts = post;
    });
  }


}

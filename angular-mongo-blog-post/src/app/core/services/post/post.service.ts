import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public post: Post;

  private enviarPostSubject = new Subject<Post>();
  enviarPostObservable = this.enviarPostSubject.asObservable();

  constructor() { }

  enviarPost(post: Post){
    this.post = post;
    console.log(post);
    this.enviarPostSubject.next(post);
  }
}

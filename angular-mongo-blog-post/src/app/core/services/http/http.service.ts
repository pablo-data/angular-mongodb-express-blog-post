import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Post } from './../../models/post.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient ) { }

  getAllPost(){
  return (this.httpClient.get<Post[]>(`${environment.base_url}`));
  }

  editPost(post: Post){
  return this.httpClient.put(`${environment.base_url}/${post._id}`, post);
  }

  deletePost(post: Post){
    return this.httpClient.delete(`${environment.base_url}/${post._id}`);
  }

  addPost(post: Post){
    return this.httpClient.post(`${environment.base_url}`, post);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './screens/posts/posts.component';
import { EditsComponent } from './screens/edits/edits.component';
import { NewPostComponent } from './screens/new-post/new-post.component';


const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  {
    path: 'edits',
    component: EditsComponent
  },
  {
    path: '**',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

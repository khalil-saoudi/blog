import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { NewpostComponent } from './newpost/newpost.component';

const routes: Routes = [
  { path:'posts' ,component:PostListComponentComponent},
  { path:'newpost', component: NewpostComponent},
  { path: '' ,component:PostListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

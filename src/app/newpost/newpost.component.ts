import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
 postForm:  FormGroup;
  constructor(private formBuilder:FormBuilder,
              private postsService:PostsService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.postForm = this.formBuilder.group({
      title:['', Validators.required],
      content:['',Validators.required]
    });
  }
onSavePost() {
  const title = this.postForm.get('title').value;
  const content= this.postForm.get('content').value;
  const newPost = new Post(title, content);
  this.postsService.createNewPost(newPost);
  this.router.navigate(['/posts'])
}
}

import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor(private postsService:PostsService) { }

  ngOnInit() {
  }
  OnLike(post:Post) {
   this.postsService.onLike(post);
  }
  OnDislike(post:Post) {
    this.postsService.onDisLike(post);
  }
  onDelete(post:Post) {
this.postsService.removePost(post);
  }
}

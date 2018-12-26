import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
posts: Post[];
postsSubscription:Subscription;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
this.postsSubscription = this.postsService.postsSubject.subscribe(
  (posts:Post[]) => {
    this.posts = posts
  }
);
this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
}
}

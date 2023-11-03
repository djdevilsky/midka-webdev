import { Component } from '@angular/core';
import { POSTS } from '../data';

interface Post {
  id: number;
  text: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts: Post[] = POSTS;


  deletePost(postId: any) {
    this.posts = this.posts.filter(post => post.id !== postId);
  }
}

import { Component } from '@angular/core';
import {POSTS} from "../data";

interface Post {
  id: number;
  text: string;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  newPost = '';
  posts: Post[] = POSTS;

  addPost() {
    if (this.newPost) {
      this.posts.push({ id: Date.now(), text: this.newPost });
      this.newPost = '';
    }
  }
}

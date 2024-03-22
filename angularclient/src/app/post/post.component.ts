import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post";
import {PostService} from "./post.service";
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {

  @Input() post: Post;

  constructor(private postService: PostService) {
  }

  subscribeCurrentUser() {
    this.postService.subscribeCurrentUser(this.post.id).subscribe();
  }

}

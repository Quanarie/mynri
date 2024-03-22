import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post";
import {PostService} from "./post.service";
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  currentUser: User;

  constructor(private userService: UserService,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getCurrent().subscribe(user => {
      this.currentUser = user;
    });
  }

  subscribeCurrentUser() {
    this.postService.subscribeCurrentUser(this.post.id).subscribe();
  }

}

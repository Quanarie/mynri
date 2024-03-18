import {Component, Input, OnInit} from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}

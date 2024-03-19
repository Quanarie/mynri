import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {PostInfo} from "../post-info/post-info";
import {PostInfoService} from "../post-info/post-info.service";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html'
})
export class PostAddComponent implements OnInit {

  post = new Post();

  postInfo: PostInfo;

  constructor(private postInfoService: PostInfoService,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.loadPostInfo();
  }

  loadPostInfo(): void {
    this.postInfoService.postInfo$().subscribe(postInfo => {
      this.postInfo = postInfo;
    });
    this.postInfoService.loadPostInfo();
  }

  onSubmit(): void {
    this.postService.save(this.post).subscribe();
  }

}

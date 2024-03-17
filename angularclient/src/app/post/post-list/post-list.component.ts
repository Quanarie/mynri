import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../post";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.loadPosts();
    }

    loadPosts(): void {
        this.postService.findAll().subscribe(posts => {
            this.posts = posts;
        });
    }
}
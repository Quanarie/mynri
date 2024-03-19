import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-search-results',
  templateUrl: './post-search-results.component.html'
})
export class PostSearchResultsComponent {

  @Input() filteredPosts: Post[] = [];

  constructor() {
  }

}

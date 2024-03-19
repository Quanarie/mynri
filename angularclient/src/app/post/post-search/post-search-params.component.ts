import {AfterContentInit, AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostSearchFilters} from "./post-search-filters";
import {PostInfo} from "../post-info/post-info";
import {PostInfoService} from "../post-info/post-info.service";

@Component({
  selector: 'app-post-search-params',
  templateUrl: './post-search-params.component.html'
})
export class PostSearchParamsComponent implements OnInit {

  @Output() filtersChanged: EventEmitter<PostSearchFilters> = new EventEmitter<PostSearchFilters>();

  filters = new PostSearchFilters();

  postInfo: PostInfo;

  constructor(private postInfoService: PostInfoService) {
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

  onSubmit() {
    this.filtersChanged.emit(this.filters);
  }
}

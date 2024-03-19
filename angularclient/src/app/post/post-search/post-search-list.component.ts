import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../post";
import {PostSearchFilters} from "./post-search-filters";

@Component({
  selector: 'app-post-search-list',
  templateUrl: './post-search-list.component.html'
})
export class PostSearchListComponent implements OnInit {

  posts: Post[] = [];
  filteredPosts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.findAll().subscribe(posts => {
      this.posts = posts;
      this.onFiltersChanged(new PostSearchFilters()); // TODO: attention (should be called once)
    });
  }

  onFiltersChanged(filters: PostSearchFilters) {
    this.filteredPosts = this.posts.filter(post => {
      return (
        (!filters.creator || post.creator.username.includes(filters.creator)) &&
        (!filters.gameSystems || !filters.gameSystems.length || filters.gameSystems.includes(post.gameSystem.name)) &&
        (!filters.gameTypes || !filters.gameTypes.length || filters.gameTypes.includes(post.gameType.name)) &&
        (!filters.tags || !filters.tags.length || post.tags.some(tag => filters.tags.includes(tag.name))) &&
        (!filters.warnings || !filters.warnings.length || post.warnings.some(warning => filters.warnings.includes(warning.name))) &&
        (!filters.payment || filters.payment === post.payment.name) &&
        (!filters.paymentMinValue || filters.paymentMinValue <= post.paymentValue) &&
        (!filters.paymentMaxValue || filters.paymentMaxValue >= post.paymentValue) &&
        (!filters.title || post.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (!filters.content || post.content.toLowerCase().includes(filters.content.toLowerCase())) &&
        (!filters.isFullyBooked || post.bookedPlayers === post.maxPlayers) &&
        (!filters.creationMinDate || new Date(post.creationDate) >= filters.creationMinDate) &&
        (!filters.creationMaxDate || new Date(post.creationDate) <= filters.creationMaxDate) &&
        (!filters.gameMinDate || new Date(post.gameDate) >= filters.gameMinDate) &&
        (!filters.gameMaxDate || new Date(post.gameDate) <= filters.gameMaxDate) &&
        (!filters.place || post.place.toLowerCase().includes(filters.place.toLowerCase())) &&
        (!filters.minDuration || filters.minDuration <= post.duration) &&
        (!filters.maxDuration || filters.maxDuration >= post.duration) &&
        (!filters.isOnline || filters.isOnline === post.isOnline)
      );
    });
  }
}

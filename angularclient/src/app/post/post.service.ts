import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = environment.domain + 'posts';
  private subscribeUrl = environment.domain + 'subscribeCurrentUser';

  constructor(private http: HttpClient) {
  }

  public subscribeCurrentUser(postId: number) {
    return this.http.post(this.subscribeUrl, postId);
  }

  public findAll() {
    return this.http.get<Post[]>(this.postsUrl);
  }

  public save(post: Post) {
    return this.http.post(this.postsUrl, post);
  }
}

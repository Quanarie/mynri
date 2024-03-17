import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";

@Injectable()
export class PostService {

  private postsUrl = environment.domain + 'posts';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  public save(post: Post) {
    return this.http.post<Post>(this.postsUrl, post);
  }
}

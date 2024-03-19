import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "./tag";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tagUrl = environment.domain + 'tags';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagUrl);
  }

}

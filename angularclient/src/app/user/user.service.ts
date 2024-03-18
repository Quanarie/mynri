import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUrl = environment.domain + 'register';
  private currentUserUrl = environment.domain + 'currentUser';

  constructor(private http: HttpClient) {
  }

  public getCurrent(): Observable<User> {
    return this.http.get<User>(this.currentUserUrl);
  }

  public register(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerUrl = environment.domain + 'register';
  private loginUrl = environment.domain + 'login';
  private userUrl = environment.domain + 'user';

  constructor(private http: HttpClient) {
  }

  public getUser(username?: string): Observable<User> {
    return this.http.get<User>(username ? `${this.userUrl}/${username}` : this.userUrl);
  }

  public register(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }

  public login(user: User) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    let body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);

    return this.http.post(this.loginUrl, body.toString(), {headers, withCredentials: true});
  }
}

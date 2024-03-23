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
  private loginUrl = environment.domain + 'login';
  private logoutUrl = environment.domain + 'logout';
  private userUrl = environment.domain + 'user';

  constructor(private http: HttpClient) {
  }

  public getUserSync(username?: string): User | undefined {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', username ? `${this.userUrl}/${username}` : this.userUrl, false);
    xhr.send();

    if (xhr.responseText.length > 0 && xhr.status === 200)
      return JSON.parse(xhr.responseText) as User;
    else
      return undefined;
  }

  public getUser(username?: string): Observable<User> {
    return this.http.get<User>(username ? `${this.userUrl}/${username}` : this.userUrl);
  }

  public login(user: User) {
    return this.http.post<boolean>(this.loginUrl, user);
  }

  public logout() {
    return this.http.post<boolean>(this.logoutUrl, null);
  }

  public register(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }

}

import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate(): boolean {
    let isAuthenticated = this.userService.getUserSync() != undefined;
    if (!isAuthenticated)
      this.router.navigateByUrl("/login");
    return isAuthenticated;
  }
}

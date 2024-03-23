import {Component, OnInit} from '@angular/core';
import {UserService} from "./user/user.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'NRI';
  isAuthenticated = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadAuthenticatedUser();
      }
    });
  }

  private loadAuthenticatedUser() {
    this.userService.getUser().subscribe(
      user => this.isAuthenticated = user != undefined
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";
import {User} from "../user/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  username: string;
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });

    this.loadUser();
  }

  loadUser(): void {
    this.userService.getUser(this.username ? this.username : undefined)
      .subscribe(user => {
        this.user = user;
      });
  }

}

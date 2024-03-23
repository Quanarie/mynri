import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.logout().subscribe(
      result => {
        if (result)
          this.router.navigateByUrl("/login");
      });
  }

}

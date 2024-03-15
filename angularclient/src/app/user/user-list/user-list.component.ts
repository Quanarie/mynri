import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      console.log('F');
      this.users = data;
    });
  }
}

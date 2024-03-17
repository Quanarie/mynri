import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent {

  user: User;

  constructor(
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
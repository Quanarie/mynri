import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  users$: Observable<User[]>;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.findAll();

    this.registrationForm = this.fb.group({
      username: ['', [Validators.required], [this.usernameValidator.bind(this)]],
      email: ['', [Validators.required, Validators.email], [this.emailValidator.bind(this)]],
      password: ['', [Validators.required]]
    });
  }

  usernameValidator(control: FormGroup): Observable<{[key: string]: any} | null> {
    return this.users$.pipe(
      map(users => users.find(user => user.username === control.value) ? { 'usernameExists': true } : null)
    );
  }

  emailValidator(control: FormGroup): Observable<{[key: string]: any} | null> {
    return this.users$.pipe(
      map(users => users.find(user => user.email === control.value) ? { 'emailExists': true } : null)
    );
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.userService.save(this.registrationForm.value).subscribe();
    }
  }

}

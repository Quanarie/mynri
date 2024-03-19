import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-post-validate-field',
  templateUrl: './post-validate-field.component.html'
})
export class PostValidateFieldComponent {

  @Input() controlField:  AbstractControl;
  @Input() validateMessage: string;

  constructor() {
  }

}

import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css',
})
export class UserSignupComponent {
  userSignupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userSignupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      pin: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }
}

import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl, Validators} from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  formSignUp = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required]),
  },[this.isMismatch]);
    isMismatch(control : AbstractControl): ValidationErrors | null {
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }
  constructor(private router: Router) {}

  onSubmit() {
    if (this.formSignUp.valid) {
    console.log(this.formSignUp.value);
      this.router.navigate(['/pizzas']);
  }
}
}

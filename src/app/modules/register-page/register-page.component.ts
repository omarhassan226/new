import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { IApiResponse } from '../../core/interfaces/api/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      second_name: ['', [Validators.required, Validators.minLength(3)]],
      third_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      religion_id: ['', [Validators.required]],
      position: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      martial_status: ['', [Validators.required]],
    });
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get second_name() {
    return this.registerForm.get('second_name');
  }

  get third_name() {
    return this.registerForm.get('third_name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get religion_id() {
    return this.registerForm.get('religion_id');
  }

  get position() {
    return this.registerForm.get('position');
  }

  get nationality() {
    return this.registerForm.get('nationality');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get martial_status() {
    return this.registerForm.get('martial_status');
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
      this.subscription = this.authService
        .register(this.registerForm.value)
        .subscribe({
          next: (_res: IApiResponse) => {
            Swal?.fire({
              title: 'Success!',
              // text: 'Thank you for your registration, check your email to verify your account',
              text: 'Thank you for your registration.',
              icon: 'success',
              confirmButtonText: 'Close',
            });
            this.navigateToDashboard();
            // this.router.navigate(['/auth/otp']);
          },
          error: (err) => {
            console.log(err);
            Swal?.fire({
              title: 'Error!',
              text: 'Something went wrong, please try again later :(',
              icon: 'error',
              confirmButtonText: 'Close',
            });
          },
          complete: () => {
            console.log('Subscription Completed!');
            Swal?.fire({
              title: 'Success!',
              // text: 'Thank you for your registration, check your email to verify your account',
              text: 'Loading...',
              icon: 'success',
              confirmButtonText: 'Close',
            });
          },
        });
    } else {
      Swal?.fire({
        title: 'Invalid form data!',
        text: 'Something went wrong, please try again later :(',
        icon: 'error',
        confirmButtonText: 'Close',
      });
      console.log('Form is invalid');
    }
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard/candidate-dashboard-index']);
  }

  navigateToLogin(): void {
    this.router.navigate(['login-page']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

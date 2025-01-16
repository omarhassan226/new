import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  subscription: Subscription = new Subscription();

  router = inject(Router);
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.subscription = this.authService
        .login(this.loginForm.value)
        .subscribe({
          next: (_res) => {
            Swal.fire({
              title: 'Success!',
              text: 'Login successful, redirecting...',
              icon: 'success',
              confirmButtonText: 'Close',
            });
            this.authService.userLogin(_res.data);
            this.authService.setProfile(_res.data);
            this.router.navigate(['/dashboard/candidate-dashboard-index']);
          },
          error: (err) => {
            console.log(err);
            Swal.fire({
              title: 'Error!',
              text: 'Invalid email or password, please try again.',
              icon: 'error',
              confirmButtonText: 'Close',
            });
          },
          complete: () => {
            console.log('Login Completed!');
          },
        });
    } else {
      Swal.fire({
        title: 'Invalid form data!',
        text: 'Please fill out the form correctly.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
      console.log('Form is invalid');
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/register-page']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  router = inject(Router);
  navigateToExternalUrl(): void {
    this.router.navigate(['dashboard/candidate-dashboard-index']);
  }

  navigateToLogin(): void {
    this.router.navigate(['login-page']);
  }
}

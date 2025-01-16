import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  activeTab: string = 'dashboard';

  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    let loader = document.querySelector('#preloader') as HTMLElement;
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  isActive(tab: string): boolean {
    return this.activeTab === tab;
  }

  logout() {
    this.authService.userLogout();
    this.router.navigate(['/login-page']);
  }
}

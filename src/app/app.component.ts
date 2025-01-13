import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Angular-candidate-portal';

  showNavbarAndFooter: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      const currentRoute = this.router.url;

      if (
        currentRoute.includes('login') ||
        currentRoute.includes('register') ||
        currentRoute.includes('dashboard')
      ) {
        this.showNavbarAndFooter = false;
      } else {
        this.showNavbarAndFooter = true;
      }
    });
  }
}

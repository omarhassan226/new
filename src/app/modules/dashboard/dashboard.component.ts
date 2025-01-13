import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    let loader = document.querySelector('#preloader') as HTMLElement;
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    }
  }
}

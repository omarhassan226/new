import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-progress',
  standalone: false,
  templateUrl: './profile-progress.component.html',
  styleUrls: ['./profile-progress.component.css'],
})
export class ProfileProgressComponent implements OnInit {
  @Input() percent: number = 0;
  @Input() radius: number = 40;

  // Calculate the circle path's `d` attribute dynamically based on the percent
  dBg: string = '';
  d: string = '';

  ngOnInit(): void {
    const radius = this.radius;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.percent / 100) * circumference;

    // Set the background circle path (full circle)
    this.dBg = `M ${radius},${radius} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${
      2 * radius
    } a ${radius},${radius} 0 1,1 0,-${2 * radius}`;

    // Set the foreground circle path (based on the percentage)
    this.d = `M ${radius},${radius} m 0,-${radius} a ${radius},${radius} 0 1,1 0,${
      2 * radius
    } a ${radius},${radius} 0 1,1 0,-${2 * radius}`;
  }
}

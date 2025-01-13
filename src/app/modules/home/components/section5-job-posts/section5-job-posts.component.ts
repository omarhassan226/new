import { Component } from '@angular/core';

@Component({
  selector: 'app-section5-job-posts',
  standalone: false,

  templateUrl: './section5-job-posts.component.html',
  styleUrl: './section5-job-posts.component.css',
})
export class Section5JobPostsComponent {
  title: string = 'Last Jobs Post';
  header: string = 'Find Your Career You Deserve It';
  items: any = [1, 2, 3, 4, 5, 6];
}

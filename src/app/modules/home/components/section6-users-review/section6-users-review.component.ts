import { Component } from '@angular/core';

@Component({
  selector: 'app-section6-users-review',
  standalone: false,

  templateUrl: './section6-users-review.component.html',
  styleUrl: './section6-users-review.component.css',
})
export class Section6UsersReviewComponent {
  title: string = 'Users Testimonials';
  header: string = 'What Users Say About Us.';
  userReview: any = [1, 2, 3];
}

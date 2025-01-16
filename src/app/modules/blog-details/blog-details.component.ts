import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  standalone: false,

  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  commentCards = [1, 2, 3];
  blogDetailsCards = [1, 2];
}

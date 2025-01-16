import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  standalone: false,

  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.css',
})
export class BlogGridComponent {
  blogCards = [1, 2, 3, 4];
}

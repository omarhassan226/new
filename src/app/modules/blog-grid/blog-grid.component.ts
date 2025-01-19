import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  standalone: false,

  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.css',
})
export class BlogGridComponent {
  blogCards = [1, 2, 3, 4];

  bannerData = {
    imageUrl: 'assets/images/banner/bnr2.jpg',
    title: 'Blog',
    link1: 'Home',
    link2: 'Blog',
  }
}

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

  bannerData = {
    imageUrl: 'assets/images/banner/bnr3.jpg',
    title: 'Blog Details',
    link1: 'Home',
    link2: 'Blog Details',
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,

  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  bannerData = {
    imageUrl: 'assets/images/banner/bnr2.jpg',
    title: 'Contact Us',
    link1: 'Home',
    link2: 'Contact Us',
  }
}

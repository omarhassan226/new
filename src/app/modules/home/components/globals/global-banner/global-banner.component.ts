import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-banner',
  standalone: false,

  templateUrl: './global-banner.component.html',
  styleUrl: './global-banner.component.css'
})
export class GlobalBannerComponent {

  @Input() bannerData:any = {
    imageUr:"",
    title:'',
    link1:'',
    link2:'',
  }
}

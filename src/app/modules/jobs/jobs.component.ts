import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: false,

  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  jobsCards: any = [1, 2, 3, 4, 5, 6];

  activeTabs() {
    console.log('hello');

    let tabElement = document.querySelector('.tabs');
    tabElement?.classList.toggle('tab-active');

    let arrow = document.querySelector('.arrow-icon');
    arrow?.classList.toggle('arrow-icon-up');
  }
}

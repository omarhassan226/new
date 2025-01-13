import { Component, Input } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-red-section',
  standalone: false,

  templateUrl: './red-section.component.html',
  styleUrl: './red-section.component.css',
})
export class RedSectionComponent implements AfterViewInit {
  @Input() activeTabs!: () => void;

  @ViewChild('tabs') tabs: ElementRef | undefined;
  @ViewChild('tabHeader') tabHeader: ElementRef | undefined;
  @ViewChild('tabBody') tabBody: ElementRef | undefined;
  @ViewChild('tabIndicator') tabIndicator: ElementRef | undefined;

  ngAfterViewInit(): void {
    // Ensure the DOM elements are available
    if (this.tabs && this.tabHeader && this.tabBody && this.tabIndicator) {
      let tabHeaderElements =
        this.tabHeader.nativeElement.querySelectorAll('div');
      let tabBodyElements = this.tabBody.nativeElement.querySelectorAll('div');

      // Adding click event listeners to each tab header element
      tabHeaderElements.forEach((element: HTMLElement, index: number) => {
        element.addEventListener('click', () => {
          // Remove active class from all tab headers and bodies
          this.tabHeader?.nativeElement
            .querySelector('.active')
            ?.classList.remove('active');
          this.tabBody?.nativeElement
            .querySelector('.active')
            ?.classList.remove('active');

          element.classList.add('active');
          tabBodyElements[index].classList.add('active');

          if (this.tabIndicator) {
            this.tabIndicator.nativeElement.style.left = `${index * 25}%`;
          }
        });
      });
    }
  }
}

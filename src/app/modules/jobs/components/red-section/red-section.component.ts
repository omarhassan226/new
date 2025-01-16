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
    if (this.tabs && this.tabHeader && this.tabBody && this.tabIndicator) {
      let tabHeaderElements =
        this.tabHeader.nativeElement.querySelectorAll('div');
      let tabBodyElements = this.tabBody.nativeElement.querySelectorAll('div');

      tabHeaderElements.forEach((element: HTMLElement, index: number) => {
        element.addEventListener('click', () => {
          this.tabHeader?.nativeElement
            .querySelector('.active')
            ?.classList.remove('active');
          this.tabBody?.nativeElement
            .querySelector('.active')
            ?.classList.remove('active');

          element.classList.add('active');
          tabBodyElements[index].classList.add('active');
          console.log(tabBodyElements[index]);
          console.log(element);

          if (this.tabIndicator) {
            this.tabIndicator.nativeElement.style.left = `${index * 25}%`;
          }
        });
      });
    }
  }
}

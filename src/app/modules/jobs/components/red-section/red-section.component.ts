import { Component, Input } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-red-section',
  standalone: false,

  templateUrl: './red-section.component.html',
  styleUrl: './red-section.component.css',
})
export class RedSectionComponent {
  @Input() activeTabs!: () => void;
  tabIndex = 0;
}

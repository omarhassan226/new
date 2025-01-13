import { Component } from '@angular/core';

@Component({
  selector: 'app-section2-cards',
  standalone: false,

  templateUrl: './section2-cards.component.html',
  styleUrl: './section2-cards.component.css',
})
export class Section2CardsComponent {
  title: string = 'Working Process';
  header: string = 'How It Work';
}

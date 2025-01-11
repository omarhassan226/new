import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
     let loader = document.querySelector('#loading-area') as HTMLElement
     if(loader){
      setTimeout(() => {
        loader.style.display = 'none'
      }, 2000);
     }
  }

}

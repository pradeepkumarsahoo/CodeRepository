import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: string[];
  constructor() {
    this.heroes=['Windstorm','Bombasto','Magneta','Tornado'];
   }

  ngOnInit() { 


  }

}

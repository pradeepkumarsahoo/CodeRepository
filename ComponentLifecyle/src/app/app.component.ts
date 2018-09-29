import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hooksArray = [];  
  
  
  constructor(){  
    this.hooksArray.push({'Name': 'TestHook'});  
  }  
  
  OnDestroy(){  
    this.hooksArray.splice(0,1);  
  }  
}


import { Component } from '@angular/core';
import { CreditvalidateDirective } from './creditvalidate.directive'; 

import { AlternatecasePipe } from './alternatecase.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  currentdate: number = Date.now();


  public name: string = 'pradeep sahoo';  
public text: string = 'ABCDEFGHIJKLMN';  

public text1: string = 'ABCDEFGHIJKLMN'; 

mynumber: number = 0.51003003039303033030;  
mynumber2: number = 0.05;
curDate: any="1/1/2019";
}

import { Component } from '@angular/core';
 
import { DataService } from './data.service';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  OperationNames: string[];
 selectedvalue :string;

   
  public size: number;  
    public square: number;  

  
    constructor(_dataService: DataService) {  
      this.OperationNames = ["Square", "Cube", "SquareRoot", "Cuberoot"];
        this.size = 16;  


        this.square = Math.sqrt(this.size);  
        _dataService.setOption('size', this.size);  
        _dataService.setOption('square', this.square);  
    }  

    GetOperationName(value)
    {
      this.selectedvalue=value;

    //  alert(value);
    }
   
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  public data;  
    
  constructor(_dataService: DataService) {  
  
    this.data = _dataService.getOption(); 
    
  }  


  ngOnInit() {
  }

}

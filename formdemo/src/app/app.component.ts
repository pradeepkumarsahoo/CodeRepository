import { Component } from '@angular/core';


import {  
  addressModel  
} from './addressModel'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  countryData: any[] = ['India', 'US', 'UK'];  
  
  model: addressModel = {  
    address: '',  
    city: '',  
    state:'',  
    postcode: null,  
    country: null,  
    aggrement: false  
  };  
  
  constructor() { }  
 
  
  onFormSubmit() {  
    console.log("Full Address", this.model);    
  }  
}

import { Component } from '@angular/core';


import {   CountryService  
} from './countryservice';  
import {  
  Country  
} from './country';  
import {  
  State  
} from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedCountry: Country = new Country(0, 'India');  
  countries: Country[];  
  states: State[];  
  constructor(private _countryService: CountryService) {  
      this.countries = this._countryService.getCountries();  
  }  
  onSelect(countryid) {  
      this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);  
  }  
}

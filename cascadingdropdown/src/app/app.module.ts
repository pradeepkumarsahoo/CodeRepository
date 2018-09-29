import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  
  CountryService  
} from './countryservice';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

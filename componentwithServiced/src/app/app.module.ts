import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ThirdComponent } from './third/third.component';


const appRoutes: Routes = [
  { path: 'Home', component: SecondchildComponent },
  { path: 'Employees', component: ThirdComponent },
 
  { path: '**', component: SecondchildComponent }
];


@NgModule({
  declarations: [
    AppComponent,

    SecondchildComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

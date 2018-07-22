import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeService } from './employee.service';
import { AccountComponent } from './account/account.component';
import { AccountService } from './account.service';



const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Account', component: AccountComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    NewsComponent,
    ContactComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

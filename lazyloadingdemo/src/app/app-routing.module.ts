import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customer.module#CustomersModule'
  },
  {
    path:'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[HomeComponent],
  providers: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule} from './products-routing.module'; //Added

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule  // Added
  ],
  declarations: []
})
export class ProductsModule { }

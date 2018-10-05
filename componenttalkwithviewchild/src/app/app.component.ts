import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {OrdersComponent} from './orders/orders.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(OrdersComponent) child1: OrdersComponent;
  
  Orders: any = {
    name: '',
    phone: '',
    ItemPurchased:'',
    Price:'',
  };


  ngAfterViewInit() {
    this.Orders = this.child1.Orders;
  
  }
}

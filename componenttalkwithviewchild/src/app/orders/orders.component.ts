import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  Orders: any = {
    name: '',
    phone: '',
    ItemPurchased:'',
    Price:'',
  };

  constructor() { }

  ngOnInit() {
  }

}

import { DataserviceService } from '../dataservice.service'
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  

  ngOnInit() {
  }
  data;
  itemsarray=[]
  constructor(private DataserviceService: DataserviceService) {
    // use property of service
    this.itemsarray = this.DataserviceService.skillset;
    // use method of service
    this.data = this.DataserviceService.servicemethod();
  }
}

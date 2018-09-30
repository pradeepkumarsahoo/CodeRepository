import { Component, OnInit } from '@angular/core';

import { CommonDataService } from './common-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messageName: string;
 
  result: number;
  MaskedAccount: any;

  constructor(private _CommonDataService: CommonDataService) {

    this.messageName = _CommonDataService.GetData();
  }

  MaskAccount(accNo) {

    this.MaskedAccount = this._CommonDataService.MaskAccountNumber(accNo);

  }
}

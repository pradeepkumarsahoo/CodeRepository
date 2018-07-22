import { Component, OnInit } from '@angular/core';
import { Account } from '../model/Account';
// Import EmployeeService
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountlist: Account[];


  constructor(private _accountSerice: AccountService) { }

  ngOnInit() {
    this.accountlist = this._accountSerice.getAccounts();
  }

}

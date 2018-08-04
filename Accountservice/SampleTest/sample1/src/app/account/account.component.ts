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
  settingtext: number;
  public color = 'blue';  

  accountid :string;

  constructor(private _accountSerice: AccountService) {
    this.settingtext=0;
    
   }

  ngOnInit() {
    this.accountlist = this._accountSerice.getAccounts();
  }
  SetValue(accid)
  {

   // alert(accid);
    this.settingtext=accid;
    this.accountid=accid;

  }

}

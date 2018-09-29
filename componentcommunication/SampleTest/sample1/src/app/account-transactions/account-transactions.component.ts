import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import { AccouAccountTransaction } from '../model/AccountTransaction';
// Import EmployeeService
import { AccountTransactionService } from '../accountTransactions.service';


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit {
  @Input() public ParentData;
  @Output() public  childevent = new EventEmitter();
   showtransaction:boolean=true;


  accounTrxlist: AccouAccountTransaction[];
 

  constructor(private _accounttrxSerice: AccountTransactionService) { }

  ngOnInit() {
  
    this.accounTrxlist=this._accounttrxSerice.getTransactions();
  }

  closeTransaction()
  {
   this.showtransaction=false;
      
  }
  SendParent()
  {
    this.childevent.emit("text message");
    
  }

}

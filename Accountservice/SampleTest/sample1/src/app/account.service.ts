import { Injectable } from '@angular/core';
import { Account } from './model/Account';
@Injectable()
export class AccountService {
    private listofAccounts: Account[] = [
        {
            Accountid: 76543333,
            AccountNumber: '1236Saving XXX-12',
            AccountHolderName:'Pradeep',
            AccountNumAccountHoldeAddress:'Bangalore ', 
            phoneNo:'9663451776',

            EMail:'a@b.com',

            AccountBalance:'343332.00',

            AccountType:'Saving',
            
            AccountOpenDate:'2/2/2012',

          AccountCreditScore:'321'
           
        },
        { Accountid: 76543334,
            AccountNumber: '1236-Loan-14',
            AccountHolderName:'Pradeep',
            AccountNumAccountHoldeAddress:'Bangalore ', 
            phoneNo:'9663451776',

            EMail:'a@b.com',

            AccountBalance:'43211.00',

            AccountType:'Loan Account',
            
            AccountOpenDate:'2/2/2014',

          AccountCreditScore:'211'
        },
        {
            Accountid: 555553111,
            AccountNumber: '1236-Demat-2012',
            AccountHolderName:'Pradeep',
            AccountNumAccountHoldeAddress:'Bangalore ', 
            phoneNo:'9663451776',

            EMail:'a@b.com',

            AccountBalance:'4321.00',

            AccountType:'Demat-Trading Account',
            
            AccountOpenDate:'2/2/2012',

          AccountCreditScore:'67'
        },
    ];

    getAccounts(): Account[] {
        return this.listofAccounts;
    }
}
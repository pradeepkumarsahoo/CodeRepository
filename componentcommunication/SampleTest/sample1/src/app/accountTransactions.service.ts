import { Injectable } from '@angular/core';
import { AccouAccountTransaction } from './model/AccountTransaction';
@Injectable()
export class AccountTransactionService {
    private listofTransactions: AccouAccountTransaction[] = [
        {
            Accountid: 76543333,
            TransactionDate:"2/2/2017",
            TransactionId:766,
            TransactionAmount :"7654",
            TransactionPlace :"Bangalore",
            TransactionReferenceno:"88772522Uxxx"
        },
        {
            Accountid: 76543333,
            TransactionDate:"2/2/2017",
            TransactionId:766,
            TransactionAmount :"7654",
            TransactionPlace :"Bangalore",
            TransactionReferenceno:"88772522Uxxx"
        },
        {
            Accountid: 76543333,
            TransactionDate:"2/2/2017",
            TransactionId:766,
            TransactionAmount :"7654",
            TransactionPlace :"Bangalore",
            TransactionReferenceno:"88772522Uxxx"
        },
    ];

    getTransactions(): AccouAccountTransaction[] {
        return this.listofTransactions;
    }
}
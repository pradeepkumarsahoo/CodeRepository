import { Component,OnInit  } from '@angular/core';

import { CommonDataService } from './common-data.service';
import { IEmployee } from './Employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messageName :string ;
  employees: IEmployee[];


  pageTitle: string = "Employee Details";
    imageWidth: number = 50;
    imageHeight: number = 50;
    filterByName: string = "";
    showImageColumn: boolean = false;
    eRating: string = "";
   
    errorMessage: string;

  constructor(private _CommonDataService :CommonDataService)
  {

    //alert("called ...");
this.messageName=_CommonDataService.GetData();
//this.employees=_CommonDataService.getEmployees();
  }

  ngOnInit(): void {
    // let self = this;
    // self._CommonDataService.getEmployees().subscribe(empData => this.employees = empData,
    //     error => this.errorMessage = <any>error);
}



}

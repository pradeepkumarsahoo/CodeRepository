import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string;
  address: string;
  phoneno:number;
  constructor() {

   }

  ngOnInit() {
    
    this.name = 'Pradeep Sahoo';
    this.address = 'Bangalore';
    this.phoneno=12344;
    
  }

}


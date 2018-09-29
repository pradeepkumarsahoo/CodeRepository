import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
// Import EmployeeService
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  name: string;
  address: string;
  phoneno:number;
  constructor(private _employeeService: EmployeeService) {

   }

  ngOnInit() {
    
    this.name = 'Pradeep Sahoo';
    this.address = 'Bangalore';
    this.phoneno=12344;

    this.employees = this._employeeService.getEmployees();
    
  }

}


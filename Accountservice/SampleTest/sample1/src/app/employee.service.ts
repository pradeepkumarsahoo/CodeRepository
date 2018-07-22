import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            empName: 'Mark'
        },
        {
            id: 2,
            empName: 'Mary'
        },
        {
            id: 3,
            empName: 'John'
        },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }
}
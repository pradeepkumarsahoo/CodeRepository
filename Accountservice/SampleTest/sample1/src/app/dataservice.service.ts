import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 // Create array
  skillset = [
    'ASP.NET',
    'MVC',
    'C#',
    'SQLSERVER',
    'AJAX',
    'Jquery',
    'WCF/WEBServices',
    'WEB API',
    'ANGULAR',
    'Azure Cloud'

  ];
  constructor() { }
 // Create simple angular service method
  servicemethod(){
      return 'Its  Skill Matrix Example of Angular5  Service ';
  }
}

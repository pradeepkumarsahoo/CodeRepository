import { Injectable } from '@angular/core';
import { IEmployee } from './Employee';  

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() { }

  GetData()

  {
    return "My Name is :xyz";
  }

  public getEmployees(): IEmployee[] {  
    return [  
        {  
            "empId": "E001",  
            "name": "Leanne Graham",  
            "email": "Sincere@april.biz",  
            "phone": "1-770-736-8031 x56442",  
            "photo": "./app/assets/imgs/face1.jpg",  
            "salary": 50000,  
            "appraisalRating": 4  
        },  
        {  
            "empId": "E002",  
            "name": "Ervin Howell",  
            "email": "Shanna@melissa.tv",  
            "phone": "210.067.6132",  
            "photo": "./app/assets/imgs/face2.jpg",  
            "salary": 65000,  
            "appraisalRating": 3.5  
        },  
        {  
            "empId": "E003",  
            "name": "Clementine Bauch",  
            "email": "Nathan@yesenia.net",  
            "phone": "1-477-935-8478 x6430",  
            "photo": "./app/assets/imgs/face3.jpg",  
            "salary": 62500,  
            "appraisalRating": 3.75  
        },  
        {  
            "empId": "E004",  
            "name": "Patricia Lebsack",  
            "email": "Julianne.OConner@kory.org",  
            "phone": "(254)954-1289",  
            "photo": "./app/assets/imgs/face4.png",  
            "salary": 49500,  
            "appraisalRating": 4.25  
        },  
        {  
            "empId": "E005",  
            "name": "Chelsey Dietrich",  
            "email": "Lucio_Hettinger@annie.ca",  
            "phone": "493-170-9623 x156",  
            "photo": "./app/assets/imgs/face5.jpg",  
            "salary": 25000,  
            "appraisalRating": 3.25  
        },  
        {  
            "empId": "E006",  
            "name": "Mrs. Dennis Schulist",  
            "email": "Karley_Dach@jasper.info",  
            "phone": "1-463-123-4447",  
            "photo": "./app/assets/imgs/face6.ico",  
            "salary": 100000,  
            "appraisalRating": 4.5  
        },  
        {  
            "empId": "E007",  
            "name": "Kurtis Weissnat",  
            "email": "Telly.Hoeger@billy.biz",  
            "phone": "010-692-6593 x09125",  
            "photo": "./app/assets/imgs/face7.png",  
            "salary": 36900,  
            "appraisalRating": 4  
        }  
    ];  
}  
}

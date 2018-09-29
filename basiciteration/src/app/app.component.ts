import { Component } from '@angular/core';

import { User } from './User';
import { MyItems } from './MyItems'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  Names: string[];

  userlist: User[];
  selectedRow: Number;

  myItems: MyItems[] = new Array();

  // Other variables    
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem;
  constructor() {
    this.Names = ["Ram", "Ramesh", "Hari", "Gopala"];

    this.userlist = [{ Id: 1001, name: 'Pradeep', Salary: 10000 },
    { Id: 1002, name: 'Alok', Salary: 20000 },
    { Id: 100, name: 'Reena', Salary: 8000 },
    { Id: 100, name: 'Dilip', Salary: 111000 },
    ];

    this.myItems.push(
      new MyItems("First Value"),
      new MyItems("Second Value"),
      new MyItems("Third Value"),
      new MyItems("Forth Value"),
      new MyItems("Fifth Value")
    );

  }

  addUser(user) {
    alert(JSON.stringify(user));
  };

  updateUser(user) {
    alert(JSON.stringify(user));

    var index = this.findIndexposition(this.userlist, user);
    if (index > -1) {
      this.userlist[index].Id=1003;
      this.userlist[index].name="PKSSS";
      this.userlist[index].Salary=1000;
    }

  };

  findIndexposition(userlist, user) {
    for (var i = 0, l = userlist.length; i < l; i++) {
      if (this.userlist[i]["Id"] === user) {
        return i;

      }
    }
  }

  deleteUser(user) {

    var index = this.findIndexposition(this.userlist, user);
    if (index > -1) {
      this.userlist.splice(index, 1);
    }

  };

  setClickedRow(index) {
    this.selectedRow = index;
  }
  selectName() {
    alert('test');
  }

  logMessage(value) {

    alert(value);
  }
  Save(Id, Name, Salary) {
    var u = new User();
    u.Id = Id;
    u.name = Name;
    u.Salary = Salary;
    this.userlist.push(u);
    alert(this.userlist);
  }
}

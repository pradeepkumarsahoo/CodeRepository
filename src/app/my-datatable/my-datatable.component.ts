import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyDatatableDataSource } from './my-datatable-datasource';

@Component({
  selector: 'my-datatable',
  templateUrl: './my-datatable.component.html',
  styleUrls: ['./my-datatable.component.css']
})
export class MyDatatableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyDatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','salary'];

  // Provided datasource to datatable
  ngOnInit() {
    this.dataSource = new MyDatatableDataSource(this.paginator, this.sort);
  }
}

import { Component, OnInit } from '@angular/core';

import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData: TableModel = new TableModel();
  mockedData = [['aaa', 'bbb', 'ccc']]


  constructor() { }

  ngOnInit() {
    this.tableData.header = [
      new TableHeaderItem({
        data: 'Name'
      }),
      new TableHeaderItem({
        data: 'Type'
      }),
      new TableHeaderItem({
        data: 'Status'
      })
    ];

    this.tableData.data = [];

    for (let i = 0; i < this.mockedData.length; i++) {
      this.tableData.data.push([new TableItem({ data: this.mockedData[i] })])
    }

    // this.tableData.data = [
    //   [
    //     new TableItem({ data: 'aaa' }),
    //     new TableItem({ data: 'bbb' }),
    //     new TableItem({ data: 'ccc' })
    //   ]
    // ];
  }

}

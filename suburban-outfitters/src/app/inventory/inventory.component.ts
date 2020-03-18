import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  item: string;
  orderdate: string;
  gender: string;
  size: string;
  quantity: number;
  unitprice: number;
  youpaid: number;
  return: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Blue T-Shirt', orderdate: '3/6/2020', gender: 'F', size: 'Medium', quantity: 1, unitprice: 20.00, youpaid: 20.00, return: 'Return item'},
  {item: 'Red T-Shirt', orderdate: '3/6/2020', gender: 'F', size: 'small', quantity: 1, unitprice: 10.00, youpaid: 5.00, return: 'Return item'},
  {item: 'Green T-Shirt', orderdate: '3/6/2020', gender: 'M', size: 'X-Large', quantity: 1, unitprice: 15.00, youpaid: 15.00, return: 'Return item'},
];
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['item', 'orderdate', 'gender', 'size', 'quantity', 'unitprice', 'youpaid', 'return'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

export interface Transaction {
  name: string;
  cost: number;
  count: number;
}

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'cost', 'count', 'totalCost'];
  transactions: Transaction[] = [
    {name: 'Пицца 4 сезона', cost: 4, count: 1},
    {name: 'Пицца Супермясная', cost: 5, count: 2},
    {name: 'Пицца Сырная', cost: 4, count: 1},
  ];

  ngOnInit() {
  }

  getTotalCost() {
    return this.transactions.map(t => t.cost * t.count).reduce((acc, value) => acc + value, 0);
  }

}

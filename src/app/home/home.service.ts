import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Topping, Size, PizzaOrder, Transaction } from './home.model';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private pizzaOrder: PizzaOrder[] = new Array();
  private transactions: Transaction[] = new Array();

  constructor() {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private toppings: Topping[] = [
    { id: 't1', title: 'Vegetables', price: '9.99' },
    {
      id: 't2',
      title: 'Meatballs',
      price: '19.99',
    },
    {
      id: 't3',
      title: 'Peperony',
      price: '15.99',
    },
    {
      id: 't4',
      title: 'Mushrooms',
      price: '5.99',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private sizes: Size[] = [
    {
      id: 't1',
      title: 'Large',
      price: '5.00',
    },
    {
      id: 't2',
      title: 'Medium',
      price: '4.00',
    },
    { id: 't3', title: 'Small', price: '3.00' },
    {
      id: 't4',
      title: 'Party',
      price: '10.00',
    },
  ];

  getAllToppings() {
    return [...this.toppings];
  }

  getTopping(toppingId: string) {
    return { ...this.toppings.find((topping) => topping.id === toppingId) };
  }

  getAllSizes() {
    return [...this.sizes];
  }

  getSize(sizeId: string) {
    return { ...this.sizes.find((size) => size.id === sizeId) };
  }
  getAllPizzaOrder() {
    return this.pizzaOrder;
  }
  getAllPreviousTransactions() {
    return this.transactions;
  }
  setNewPreviousOrder(p: string) {
    const DATE_TIME_FORMAT = 'YYYY/MM/DD : hh:mm';
    // eslint-disable-next-line prefer-const
    let now: moment.Moment =  moment().utc();

    // eslint-disable-next-line prefer-const
    let t: Transaction = { date: now.format(DATE_TIME_FORMAT), totalPrice: p };
    this.transactions.push(t);
  }
  deletePizzOrderByID(order: PizzaOrder) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.pizzaOrder.forEach((element, index) => {
      // eslint-disable-next-line no-cond-assign
      if (element === order) {
        this.pizzaOrder.splice(index, 1);
      }
    });
  }
  deleteAllPizzaOrder() {
    this.pizzaOrder = [];
  }
  createNewPizzaOrder(i: number, t: string, s: string, tt: string, q: string) {
    // eslint-disable-next-line prefer-const
    let order: PizzaOrder = {
      id: i,
      topping: t,
      size: s,
      totalPrice: tt,
      qty: q,
    };
    this.pizzaOrder.push(order);

    console.log(this.pizzaOrder);
  }
}

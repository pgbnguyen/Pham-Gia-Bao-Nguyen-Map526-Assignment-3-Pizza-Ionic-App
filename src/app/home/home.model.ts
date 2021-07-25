import {Moment} from 'moment';
export interface Topping {
  id: string;
  title: string;
  price: string;
}

export interface Size {
  id: string;
  title: string;
  price: string;
}
export interface PizzaOrder {
  id: number;
  topping: string;
  size: string;
  totalPrice: string;
  qty: string;
}
export interface Transaction {
  date: string;
  totalPrice: string;
}

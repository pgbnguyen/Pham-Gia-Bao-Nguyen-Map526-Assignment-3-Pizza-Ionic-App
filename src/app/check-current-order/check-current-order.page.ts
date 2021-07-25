import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaOrder } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { Moment } from 'moment';
import * as moment from 'moment';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-check-current-order',
  templateUrl: './check-current-order.page.html',
  styleUrls: ['./check-current-order.page.scss'],
})
export class CheckCurrentOrderPage implements OnInit {
  orders: PizzaOrder[];
  orderPrice: string;
  quantity: string;
  isCollapsed = false;
  deletedOrder: any;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}
  ngOnInit() {
    let total = 0;
    let qty = 0;
    this.orders = this.homeService.getAllPizzaOrder();
    this.orders.forEach((element) => {
      total += Number(element.totalPrice);
      qty += Number(element.qty);
    });
    this.orderPrice = total.toFixed(2);
    this.quantity = qty.toString();
    console.log(this.orderPrice);
  }
  deleteOrder() {
    let total = 0;
    let qty = 0;
    this.homeService.deletePizzOrderByID(this.deletedOrder);
    this.orders = this.homeService.getAllPizzaOrder();
    this.orders.forEach((element) => {
      total += Number(element.totalPrice);
      qty += Number(element.qty);
    });
    this.orderPrice = total.toFixed(2);
    this.quantity = qty.toString();
    this.isCollapsed = !this.isCollapsed;
  }
  toogleToolBar(o) {
    let myO: any;
    this.isCollapsed = !this.isCollapsed;
    // eslint-disable-next-line prefer-const
    myO = o;
    this.deletedOrder = myO;
    console.log(this.deletedOrder);
  }
  async checkoutOrder() {
    if (this.orderPrice === '0' || this.quantity === '0') {
      const alert = await this.alertCtrl.create({
        header: 'Missing Info',
        message: 'Please choose your order quantity, topping and size',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            cssClass: 'secondary',
            handler: () => {
              this.router.navigate(['/home']);
            },
          },
        ],
      });
      alert.present();
    }else{
    // eslint-disable-next-line prefer-const
    this.homeService.setNewPreviousOrder(this.orderPrice);
    this.homeService.deleteAllPizzaOrder();
    this.orders=[];
    this.orderPrice= '0';
    this.quantity= '0';
    this.router.navigate(['/checkout']);
    }
  }
}

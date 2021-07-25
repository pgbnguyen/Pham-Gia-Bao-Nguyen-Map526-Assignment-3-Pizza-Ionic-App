import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Topping } from './home.model';
import { Size } from './home.model';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantity: string;
  mTopping: string;
  mSize: string;
  toppingPrice: string;
  sizePrice: string;
  pizzaPrice: string;
  toppings: Topping[];
  sizes: Size[];
  id: number;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    // eslint-disable-next-line prefer-const
    let orderID = 0;
    this.id = orderID;
    this.toppings = this.homeService.getAllToppings();
    this.sizes = this.homeService.getAllSizes();
  }
  quantityHandler(value: any) {
    this.quantity = value;
    console.log(this.quantity);
  }
  toppingHandler(value: any) {
    this.mTopping = value.title;
    this.toppingPrice = value.price;
    console.log(this.toppingPrice);
  }
  sizeHandler(value: any) {
    this.mSize = value.title;
    this.sizePrice = value.price;
    console.log(this.sizePrice);
  }
  async addOrder() {
    if (this.quantity == null || this.mTopping == null || this.mSize == null) {
      // eslint-disable-next-line prefer-const
      const alert = await this.alertCtrl.create({
        header: 'Missing Info',
        message: 'Please choose your order quantity, topping and size',
        buttons: ['OK'],
      });
      alert.present();
    } else {
      // eslint-disable-next-line prefer-const
      this.pizzaPrice = (
        (Number(this.sizePrice) + Number(this.toppingPrice)) *
        Number(this.quantity)
      ).toFixed(2);

      this.homeService.createNewPizzaOrder(
        this.id + 1,
        this.mTopping,
        this.mSize,
        this.pizzaPrice,
        this.quantity
      );
      const alert = await this.alertCtrl.create({
        header: 'Successly Add To Bill',
        message: `You have add to you bill ${this.quantity} Pizza<br/>
                  Topping: ${this.mTopping}<br/>
                  Size: ${this.mSize}<br/>
                  Price: ${this.pizzaPrice}`,
        buttons: ['OK'],
      });
      alert.present();

      this.quantity = null;
      this.mSize = null;
      this.mTopping = null;
      this.pizzaPrice = null;
    }
  }
  resetOrder() {
    this.quantity = null;
    this.mSize = null;
    this.mTopping = null;
    this.pizzaPrice = null;
  }
}

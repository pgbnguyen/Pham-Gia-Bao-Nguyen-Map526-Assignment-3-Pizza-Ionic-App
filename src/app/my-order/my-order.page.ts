import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {
  constructor(
    private homeService: HomeService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {}
  goBack() {
    this.router.navigate(['/home']);
  }
  privousOrderBtn() {
    this.router.navigate(['/checkout']);
  }
  newOrder(){
    this.homeService.deleteAllPizzaOrder();
    this.router.navigate(['/home']);
  }
}

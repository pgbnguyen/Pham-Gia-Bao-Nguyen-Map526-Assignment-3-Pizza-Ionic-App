import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PizzaOrder, Transaction } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  previousTransactions: Transaction[];
  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.previousTransactions = this.homeService.getAllPreviousTransactions();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckCurrentOrderPageRoutingModule } from './check-current-order-routing.module';

import { CheckCurrentOrderPage } from './check-current-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckCurrentOrderPageRoutingModule
  ],
  declarations: [CheckCurrentOrderPage]
})
export class CheckCurrentOrderPageModule {}

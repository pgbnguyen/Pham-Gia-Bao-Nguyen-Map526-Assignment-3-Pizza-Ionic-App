import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckCurrentOrderPage } from '../check-current-order/check-current-order.page';

import { MyOrderPage } from './my-order.page';

const routes: Routes = [
  {
    path: '',
    component: MyOrderPage
  },
  {
    path: '/checkCurrentOrder',
    component: CheckCurrentOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOrderPageRoutingModule {}

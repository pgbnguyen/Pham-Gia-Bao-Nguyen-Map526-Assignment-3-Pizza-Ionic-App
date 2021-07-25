import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrderPage } from '../my-order/my-order.page';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'myOrder',
    component: MyOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

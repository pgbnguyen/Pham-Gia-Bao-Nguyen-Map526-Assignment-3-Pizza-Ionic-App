import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckCurrentOrderPage } from './check-current-order.page';

const routes: Routes = [
  {
    path: '',
    component: CheckCurrentOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckCurrentOrderPageRoutingModule {}

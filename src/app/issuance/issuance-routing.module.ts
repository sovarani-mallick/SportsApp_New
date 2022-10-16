import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuancePage } from './issuance.page';

const routes: Routes = [
  {
    path: '',
    component: IssuancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuancePageRoutingModule {}

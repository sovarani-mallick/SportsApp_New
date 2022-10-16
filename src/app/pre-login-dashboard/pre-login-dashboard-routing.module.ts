import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreLoginDashboardPage } from './pre-login-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PreLoginDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreLoginDashboardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerDashboardPage } from './player-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerDashboardPageRoutingModule {}

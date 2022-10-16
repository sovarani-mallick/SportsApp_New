import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerWiseDuePage } from './player-wise-due.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerWiseDuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerWiseDuePageRoutingModule {}

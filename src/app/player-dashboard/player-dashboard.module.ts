import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerDashboardPageRoutingModule } from './player-dashboard-routing.module';

import { PlayerDashboardPage } from './player-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerDashboardPageRoutingModule
  ],
  declarations: [PlayerDashboardPage]
})
export class PlayerDashboardPageModule {}

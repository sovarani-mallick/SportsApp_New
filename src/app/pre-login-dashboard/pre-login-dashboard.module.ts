import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreLoginDashboardPageRoutingModule } from './pre-login-dashboard-routing.module';

import { PreLoginDashboardPage } from './pre-login-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreLoginDashboardPageRoutingModule
  ],
  declarations: [PreLoginDashboardPage]
})
export class PreLoginDashboardPageModule {}

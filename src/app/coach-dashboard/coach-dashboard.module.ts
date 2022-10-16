import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachDashboardPageRoutingModule } from './coach-dashboard-routing.module';

import { CoachDashboardPage } from './coach-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachDashboardPageRoutingModule
  ],
  declarations: [CoachDashboardPage]
})
export class CoachDashboardPageModule {}

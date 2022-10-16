import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssuancePageRoutingModule } from './issuance-routing.module';

import { IssuancePage } from './issuance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssuancePageRoutingModule
  ],
  declarations: [IssuancePage]
})
export class IssuancePageModule {}

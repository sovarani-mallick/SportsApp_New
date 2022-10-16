import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JerseyViewPageRoutingModule } from './jersey-view-routing.module';

import { JerseyViewPage } from './jersey-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JerseyViewPageRoutingModule
  ],
  declarations: [JerseyViewPage]
})
export class JerseyViewPageModule {}

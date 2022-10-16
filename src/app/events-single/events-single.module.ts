import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsSinglePageRoutingModule } from './events-single-routing.module';

import { EventsSinglePage } from './events-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsSinglePageRoutingModule
  ],
  declarations: [EventsSinglePage]
})
export class EventsSinglePageModule {}

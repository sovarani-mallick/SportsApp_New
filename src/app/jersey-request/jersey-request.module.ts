import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JerseyRequestPageRoutingModule } from './jersey-request-routing.module';

import { JerseyRequestPage } from './jersey-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JerseyRequestPageRoutingModule
  ],
  declarations: [JerseyRequestPage]
})
export class JerseyRequestPageModule {}

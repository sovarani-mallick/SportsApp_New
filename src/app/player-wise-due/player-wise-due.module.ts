import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerWiseDuePageRoutingModule } from './player-wise-due-routing.module';

import { PlayerWiseDuePage } from './player-wise-due.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerWiseDuePageRoutingModule
  ],
  declarations: [PlayerWiseDuePage]
})
export class PlayerWiseDuePageModule {}

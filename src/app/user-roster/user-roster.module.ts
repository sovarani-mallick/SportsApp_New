import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRosterPageRoutingModule } from './user-roster-routing.module';

import { UserRosterPage } from './user-roster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRosterPageRoutingModule
  ],
  declarations: [UserRosterPage]
})
export class UserRosterPageModule {}

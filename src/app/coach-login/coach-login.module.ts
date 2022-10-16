import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachLoginPageRoutingModule } from './coach-login-routing.module';

import { CoachLoginPage } from './coach-login.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CoachLoginPage]
})
export class CoachLoginPageModule {}

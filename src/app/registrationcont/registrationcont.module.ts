import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationcontPageRoutingModule } from './registrationcont-routing.module';

import { RegistrationcontPage } from './registrationcont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationcontPageRoutingModule
  ],
  declarations: [RegistrationcontPage]
})
export class RegistrationcontPageModule {}

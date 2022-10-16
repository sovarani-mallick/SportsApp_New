import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesEntryPageRoutingModule } from './expenses-entry-routing.module';

import { ExpensesEntryPage } from './expenses-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensesEntryPageRoutingModule
  ],
  declarations: [ExpensesEntryPage]
})
export class ExpensesEntryPageModule {}

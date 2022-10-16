import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionEntryPageRoutingModule } from './collection-entry-routing.module';

import { CollectionEntryPage } from './collection-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionEntryPageRoutingModule
  ],
  declarations: [CollectionEntryPage]
})
export class CollectionEntryPageModule {}

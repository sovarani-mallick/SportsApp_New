import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionEntryPage } from './collection-entry.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionEntryPageRoutingModule {}

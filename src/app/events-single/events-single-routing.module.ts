import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsSinglePage } from './events-single.page';

const routes: Routes = [
  {
    path: '',
    component: EventsSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsSinglePageRoutingModule {}

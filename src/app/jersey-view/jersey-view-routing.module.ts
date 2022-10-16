import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerseyViewPage } from './jersey-view.page';

const routes: Routes = [
  {
    path: '',
    component: JerseyViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JerseyViewPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerseyRequestPage } from './jersey-request.page';

const routes: Routes = [
  {
    path: '',
    component: JerseyRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JerseyRequestPageRoutingModule {}

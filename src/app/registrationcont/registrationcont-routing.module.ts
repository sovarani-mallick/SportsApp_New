import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationcontPage } from './registrationcont.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationcontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationcontPageRoutingModule {}

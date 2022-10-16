import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRosterPage } from './user-roster.page';

const routes: Routes = [
  {
    path: '',
    component: UserRosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRosterPageRoutingModule {}

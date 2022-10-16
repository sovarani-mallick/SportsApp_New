import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesEntryPage } from './expenses-entry.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensesEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesEntryPageRoutingModule {}

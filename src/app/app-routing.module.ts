import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pre-login-dashboard/pre-login-dashboard.module').then( m => m.PreLoginDashboardPageModule)
  },
  {
      path: 'inquiry',
    loadChildren: () => import('./inquiry/inquiry.module').then( m => m.InquiryPageModule)
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'inquiry',
    loadChildren: () => import('./inquiry/inquiry.module').then( m => m.InquiryPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'registrationcont',
    loadChildren: () => import('./registrationcont/registrationcont.module').then( m => m.RegistrationcontPageModule)
  },
   {
    path: 'coach-login',
    loadChildren: () => import('./coach-login/coach-login.module').then( m => m.CoachLoginPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'events-single',
    loadChildren: () => import('./events-single/events-single.module').then( m => m.EventsSinglePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'roster',
    loadChildren: () => import('./roster/roster.module').then( m => m.RosterPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },

  {
    path: 'player-dashboard',
    loadChildren: () => import('./player-dashboard/player-dashboard.module').then( m => m.PlayerDashboardPageModule)
  },
  {
    path: 'coach-dashboard',
    loadChildren: () => import('./coach-dashboard/coach-dashboard.module').then( m => m.CoachDashboardPageModule)
  },
  // {
  //   path: 'inquiry',
  //   loadChildren: () => import('./inquiry/inquiry.module').then( m => m.InquiryPageModule)
  // },
  {
    path: 'leave-request',
    loadChildren: () => import('./leave-request/leave-request.module').then( m => m.LeaveRequestPageModule)
  },
  {
    path: 'leave-history',
    loadChildren: () => import('./leave-history/leave-history.module').then( m => m.LeaveHistoryPageModule)
  },
  {
    path: 'user-roster',
    loadChildren: () => import('./user-roster/user-roster.module').then( m => m.UserRosterPageModule)
  },
  {
    path: 'jersey-view',
    loadChildren: () => import('./jersey-view/jersey-view.module').then( m => m.JerseyViewPageModule)
  },
  {
    path: 'jersey-request',
    loadChildren: () => import('./jersey-request/jersey-request.module').then( m => m.JerseyRequestPageModule)
  },
  {
    path: 'acknowledgement',
    loadChildren: () => import('./acknowledgement/acknowledgement.module').then( m => m.AcknowledgementPageModule)
  },
  {
    path: 'issuance',
    loadChildren: () => import('./issuance/issuance.module').then( m => m.IssuancePageModule)
  },
  {
    path: 'player-wise-due',
    loadChildren: () => import('./player-wise-due/player-wise-due.module').then( m => m.PlayerWiseDuePageModule)
  },
  {
    path: 'collection-entry',
    loadChildren: () => import('./collection-entry/collection-entry.module').then( m => m.CollectionEntryPageModule)
  },
  {
    path: 'expenses-entry',
    loadChildren: () => import('./expenses-entry/expenses-entry.module').then( m => m.ExpensesEntryPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

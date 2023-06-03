import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DisplayListPosterComponent } from './display-list-poster/display-list-poster.component';
import { DisplayMovieDetailsComponent } from './display-movie-details/display-movie-details.component';
import { UserAccountComponent } from 'src/app/components/user-account/user-account.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

import { isNotLoggedInGuard } from 'src/app/guards/is-not-logged-in.guard';

import { EmployeeComponent } from './employee/employee.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        component: ScheduleManagementComponent,
      },
      {
        path: 'movie/:id',
        component: DisplayMovieDetailsComponent,
      },
      {
        canActivate: [isNotLoggedInGuard],
        path: 'user',
        component: UserAccountComponent,
        children: [
          {
            path: 'logIn',
            component: LogInComponent,
          },
          {
            path: 'register',
            component: RegisterComponent,
          },
        ],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }

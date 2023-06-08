import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full',
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'employee/update/:id',
        component: UpdateComponent,
      },
      {
        path: 'movie',
        component: MovieComponent,
      },
      {
        path: 'movie/update/:id',
        component: UpdateMovieComponent,
      },
      {
        path: 'cinema',
        component: CinemaManagementComponent,
      },
      {
        path: 'schedule',
        component: ScheduleManagementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

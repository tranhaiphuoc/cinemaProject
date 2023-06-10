import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { ScheduleDetailsComponent } from './schedule-management/schedule-details/schedule-details.component';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { UpdateAddEmployeeComponent } from './employee/update-add-employee/update-add-employee.component';
import { UpdateAddMovieComponent } from './movie/update-add-movie/update-add-movie.component';

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
        path: 'employee/add',
        component: UpdateAddEmployeeComponent
      },
      {
        path: 'employee/update/:IDcard',
        component: UpdateAddEmployeeComponent
      },
      {
        path: 'movie',
        component: MovieComponent,
      },
      {
        path: 'movie/add', component: UpdateAddMovieComponent
      },
      {
        path: 'movie/update/:id', component: UpdateAddMovieComponent
      },
      {
        path: 'cinema',
        component: CinemaManagementComponent,
      },
      {
        path: 'schedule',
        component: ScheduleManagementComponent,
      },
      {
        path: 'schedule-management', component: ScheduleManagementComponent
      },
      {
        path: 'schedule-management/details/:indexCinemaDto/:indexCinemaSchedule/:indexSchedule', component: ScheduleDetailsComponent
      },
      {
        path: 'cinema-management', component: CinemaManagementComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

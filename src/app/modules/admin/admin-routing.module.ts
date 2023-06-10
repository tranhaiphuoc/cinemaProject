import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { ScheduleDetailsComponent } from './schedule-management/schedule-details/schedule-details.component';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: '', component: EmployeeComponent
      },
      {
        path: 'update/:id',
        component: UpdateComponent
      },
      {
        path: 'movie', component: MovieComponent
      },
      {
        path: 'movie/update/:id', component: UpdateMovieComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

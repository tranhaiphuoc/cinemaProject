import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { UpdateAddComponent } from './employee/update-add/update-add.component';

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
        path: 'add',
        component: UpdateAddComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'update/:IDcard',
        component: UpdateAddComponent
      },
      {
        path: 'employee/update/:id',
        component: UpdateAddComponent,
      },
      {
        path: 'movie/add', component: UpdateMovieComponent
      },
      {
        path: 'movie/update/:id', component: UpdateMovieComponent
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
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

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
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: '', component: EmployeeComponent
      },
      {
        path: 'add',
        component: UpdateAddComponent
      },
      {
        path: 'update/:IDcard',
        component: UpdateAddComponent
      },
      {
        path: 'movie', component: MovieComponent
      },
      {
        path: 'movie/add', component: UpdateMovieComponent
      },
      {
        path: 'movie/update/:id', component: UpdateMovieComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

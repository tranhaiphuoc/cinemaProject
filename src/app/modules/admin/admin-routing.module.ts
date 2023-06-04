import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

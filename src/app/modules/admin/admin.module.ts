import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { TableMovieComponent } from './movie/table-movie/table-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    UpdateComponent,
    AdminLayoutComponent,
    MovieComponent,
    TableMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

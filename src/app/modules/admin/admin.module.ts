import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { TableMovieComponent } from './movie/table-movie/table-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    CinemaManagementComponent,
    CinemaManagementComponent,
    UpdateComponent,
    AdminLayoutComponent,
    MovieComponent,
    TableMovieComponent,
    UpdateMovieComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule { }

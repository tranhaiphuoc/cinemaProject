import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { TableMovieComponent } from './movie/table-movie/table-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';

@NgModule({
  declarations: [
    CinemaManagementComponent,
    ScheduleManagementComponent,
    CinemaManagementComponent,
    EmployeeComponent,
    UpdateComponent,
    AdminLayoutComponent,
    MovieComponent,
    TableMovieComponent,
    UpdateMovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}

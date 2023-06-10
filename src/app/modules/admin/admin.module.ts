import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './employee/update/update.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { TableMovieComponent } from './movie/table-movie/table-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScheduleDetailsComponent } from './schedule-management/schedule-details/schedule-details.component';

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
    ScheduleDetailsComponent,
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

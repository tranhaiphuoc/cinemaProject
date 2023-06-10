import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MovieComponent } from './movie/movie.component';
import { TableMovieComponent } from './movie/table-movie/table-movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScheduleDetailsComponent } from './schedule-management/schedule-details/schedule-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';
import { UpdateAddEmployeeComponent } from './employee/update-add-employee/update-add-employee.component';
import { UpdateAddMovieComponent } from './movie/update-add-movie/update-add-movie.component';

@NgModule({
  declarations: [
    CinemaManagementComponent,
    ScheduleManagementComponent,
    CinemaManagementComponent,
    EmployeeComponent,
    AdminLayoutComponent,
    MovieComponent,
    TableMovieComponent,
    ScheduleDetailsComponent,
    UpdateAddMovieComponent,
    UpdateAddEmployeeComponent,
    UpdateAddMovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';


@NgModule({
  declarations: [
    CinemaManagementComponent,
    ScheduleManagementComponent,
    CinemaManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SsDateComponent } from './components/select-schedule/ss-date/ss-date.component';
import { SsCinemaComponent } from './components/select-schedule/ss-cinema/ss-cinema.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SsDateComponent,
    SsCinemaComponent,
    ScheduleComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

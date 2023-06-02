import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SsDateComponent } from './components/select-schedule/ss-date/ss-date.component';
import { SsCinemaComponent } from './components/select-schedule/ss-cinema/ss-cinema.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DisplayMovieDetailsComponent } from './display-movie-details/display-movie-details.component';
import { DisplayListPosterComponent } from './display-list-poster/display-list-poster.component';
import { PosterInfomationComponent } from './components/poster-infomation/poster-infomation.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ButtonBookingComponent } from './components/button-booking/button-booking.component';

@NgModule({
  declarations: [
    SsDateComponent,
    SsCinemaComponent,
    ScheduleComponent,
    NavBarComponent,
    DisplayMovieDetailsComponent,
    DisplayListPosterComponent,
    PosterInfomationComponent,
    UserLayoutComponent,
    ButtonBookingComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { TrailerComponent } from './display-movie-details/trailer/trailer.component';
import { ZoomImageComponent } from './display-movie-details/zoom-image/zoom-image.component';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';

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
    TrailerComponent,
    ZoomImageComponent,
    ScheduleManagementComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class UserModule { }

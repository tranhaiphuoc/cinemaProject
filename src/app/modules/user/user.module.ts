import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { ScheduleComponent } from './button-booking/components/schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DisplayMovieDetailsComponent } from './display-movie-details/display-movie-details.component';
import { DisplayListPosterComponent } from './display-list-poster/display-list-poster.component';
import { PosterInfomationComponent } from './poster-infomation/poster-infomation.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { ButtonBookingComponent } from './button-booking/button-booking.component';
import { TrailerComponent } from './display-movie-details/trailer/trailer.component';
import { SelectTicketComponent } from './button-booking/components/select-ticket/select-ticket.component';
import { ButtonBackComponent } from './button-booking/components/button-back/button-back.component';
import { ButtonSelectSeatComponent } from './button-booking/components/button-select-seat/button-select-seat.component';
import { ButtonConfirmBookingComponent } from './button-booking/components/button-confirm-booking/button-confirm-booking.component';
import { ScheduleCinemaComponent } from './button-booking/components/schedule-cinema/schedule-cinema.component';
import { ScheduleDateComponent } from './button-booking/components/schedule-date/schedule-date.component';
import { SelectSeatComponent } from './button-booking/components/select-seat/select-seat.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    NavBarComponent,
    DisplayMovieDetailsComponent,
    DisplayListPosterComponent,
    PosterInfomationComponent,
    UserLayoutComponent,
    TrailerComponent,
    SelectTicketComponent,
    ButtonBackComponent,
    ButtonSelectSeatComponent,
    ButtonBookingComponent,
    ButtonConfirmBookingComponent,
    ScheduleCinemaComponent,
    ScheduleDateComponent,
    SelectSeatComponent,
    MoviePosterComponent,
    UserHomeComponent,
    MovieCarouselComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class UserModule { }

import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Cinema } from '../models/cinema.model';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { SeatTypeService } from './seat-type.service';
import { SeatType } from '../models/seat-type';
import { BookingDetails } from '../models/booking-details';

@Injectable({
  providedIn: 'root',
})
export class CinemaBookingService {
  private user: User = this.userService.getById(2);
  private movieList: Movie[] = this.movieService.getList();
  private seatTypeList: SeatType[] = this.seatTypeService.getList();

  private bookingList: Booking[] = [
    new Booking(
      this.user,
      new Cinema(1, '2D Cinema'),
      this.movieList[0],
      {
        id: 1,
        scheduleId: 1,
        hour: 21,
        minute: 50,
      },
      new Date(),
      2,
      35000,
      [
        new BookingDetails(
          1,
          {
            id: 1,
            cinameId: 1,
            name: 'A0',
            type: this.seatTypeList[0],
            status: 1,
          },
          10000
        ),
        new BookingDetails(
          1,
          {
            id: 11,
            cinameId: 1,
            name: 'B0',
            type: this.seatTypeList[2],
            status: 1,
          },
          25000
        ),
      ]
    ),
    new Booking(
      this.user,
      new Cinema(2, '2D Cinema'),
      this.movieList[0],
      {
        id: 19,
        scheduleId: 5,
        hour: 22,
        minute: 45,
      },
      new Date(),
      2,
      65000,
      [
        new BookingDetails(
          2,
          {
            id: 16,
            cinameId: 2,
            name: 'A0',
            type: this.seatTypeList[1],
            status: 1,
          },
          20000
        ),
        new BookingDetails(
          2,
          {
            id: 26,
            cinameId: 2,
            name: 'B0',
            type: this.seatTypeList[3],
            status: 1,
          },
          45000
        ),
      ]
    ),
  ];

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private seatTypeService: SeatTypeService
  ) {}

  getList(): Booking[] {
    return this.bookingList;
  }

  getBookedSeat(showtimeId: number): Booking[] {
    let temp: Booking[] = [];

    this.bookingList.forEach((booking) => {
      if (booking.showtime.id == showtimeId) {
        temp.push(booking);
      }
    });

    return temp;
  }

  add(booking: Booking): void {
    if (booking == undefined || booking == null) return;

    this.bookingList.push(booking);
  }
}

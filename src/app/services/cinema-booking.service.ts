import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Cinema } from '../models/cinema.model';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { SeatTypeService } from './seat-type.service';
import { SeatType } from '../models/seat-type';

@Injectable({
  providedIn: 'root',
})
export class CinemaBookingService {
  private user: User = this.userService.getById(2);
  private movieList: Movie[] = this.movieService.getList();
  private seatTypeList: SeatType[] = this.seatTypeService.getList();

  private bookingList: Booking[] = [
    {
      id: 1,
      user: this.user,
      cinema: new Cinema(1, '2D Cinema'),
      movie: this.movieList[0],
      showtime: {
        id: 1,
        scheduleId: 1,
        hour: 21,
        minute: 50,
      },
      date: new Date(),
      quantity: 2,
      total: 35000,
      bookingDetails: [
        {
          id: 1,
          bookingId: 1,
          seat: {
            id: 1,
            cinameId: 1,
            name: 'A0',
            type: this.seatTypeList[0],
            status: 1,
          },
          price: 10000,
        },
        {
          id: 2,
          bookingId: 1,
          seat: {
            id: 11,
            cinameId: 1,
            name: 'B0',
            type: this.seatTypeList[2],
            status: 1,
          },
          price: 25000,
        },
      ],
    },
    {
      id: 2,
      user: this.user,
      cinema: new Cinema(2, '2D Cinema'),
      movie: this.movieList[4],
      showtime: {
        id: 19,
        scheduleId: 5,
        hour: 22,
        minute: 45,
      },
      date: new Date(),
      quantity: 2,
      total: 65000,
      bookingDetails: [
        {
          id: 3,
          bookingId: 2,
          seat: {
            id: 16,
            cinameId: 2,
            name: 'A0',
            type: this.seatTypeList[1],
            status: 1,
          },
          price: 20000,
        },
        {
          id: 4,
          bookingId: 2,
          seat: {
            id: 26,
            cinameId: 2,
            name: 'B0',
            type: this.seatTypeList[3],
            status: 1,
          },
          price: 45000,
        },
      ],
    },
  ];
  private count: number = this.bookingList.length;

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    private seatTypeService: SeatTypeService
  ) {}

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

    booking.id = ++this.count;

    this.bookingList.push(booking);
  }
}

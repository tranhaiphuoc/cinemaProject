import { BookingDetails } from './booking-details';
import { Cinema } from './cinema.model';
import { Movie } from './movie.model';
import { Showtime } from './showtime.model';
import { User } from './user.model';

export class Booking {
  private static _id = 0;

  id!: number;
  user!: User;
  cinema!: Cinema;
  movie!: Movie;
  showtime!: Showtime;
  date!: Date;
  quantity!: number;
  total!: number;
  bookingDetails!: BookingDetails[];

  constructor(user: User, cinema: Cinema, movie: Movie, showtime: Showtime, date: Date, quantity: number, total: number, bookingDetails: BookingDetails[]) {
    this.id = ++Booking._id;
    this.user = user;
    this.cinema = cinema;
    this.movie = movie;
    this.showtime = showtime;
    this.date = date;
    this.quantity = quantity;
    this.total = total;
    this.bookingDetails = bookingDetails;
  }
}

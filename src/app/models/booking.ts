import { BookingDetails } from './booking-details';
import { Cinema } from './cinema.model';
import { Movie } from './movie.model';
import { Showtime } from './showtime.model';
import { User } from './user.model';

export class Booking {
  id!: number;
  user!: User;
  cinema!: Cinema;
  movie!: Movie;
  showtime!: Showtime;
  date!: Date;
  quantity!: number;
  total!: number;
  bookingDetails!: BookingDetails[];
}

import { DateTimeSchedule } from './date-time-schedule.model';
import { Movie } from './movie.model';
import { Showtime } from './showtime.model';

export class Schedule implements ISchedule {
  id!: number;
  movie!: Movie;
  dateTime!: DateTimeSchedule[];
}

export interface ISchedule {
  id: number;
  movie: Movie;
  dateTime: DateTimeSchedule[];
}

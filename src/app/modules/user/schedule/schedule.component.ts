import { Component, Input, OnInit } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @Input() movie: Movie = {
    id: 1,
    name: 'FAST AND FURIOUS X',
    rating: 'T16',
    releaseDate: new Date(2023, 5, 19),
    runtime: 141,
    genre: [new Genre(1, 'Action'), new Genre(2, 'Crime')],
    anecdote:
      'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes',
    status: 1,
  };
  cinemaScheduleList: CinemaDto[] = [];

  constructor(private cinemaScheduleService: CinemaScheduleService) {}

  ngOnInit(): void {
    this.receive(new Date());
  }

  receive(date: Date): void {
    this.cinemaScheduleList = this.cinemaScheduleService.getAvailableSchedule(
      this.movie,
      date
    );
  }
}

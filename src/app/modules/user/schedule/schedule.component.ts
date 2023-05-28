import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() movie!: Movie;
  @Output() toggle = new EventEmitter();
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

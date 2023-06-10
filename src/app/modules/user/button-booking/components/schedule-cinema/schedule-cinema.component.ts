import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { Cinema } from 'src/app/models/cinema.model';
import { Showtime } from 'src/app/models/showtime.model';

@Component({
  selector: 'app-schedule-cinema',
  templateUrl: './schedule-cinema.component.html',
  styleUrls: ['./schedule-cinema.component.scss']
})
export class ScheduleCinemaComponent {
  @Input() cinemaSchedule!: CinemaScheduleDto[];
  @Output() sendShowtimeId = new EventEmitter<{
    cinema: Cinema;
    showtime: Showtime;
  }>();

  send(cinema: Cinema, showtime: Showtime): void {
    this.sendShowtimeId.emit({ cinema: cinema, showtime: showtime });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { Cinema } from 'src/app/models/cinema.model';
import { Showtime } from 'src/app/models/showtime.model';

@Component({
  selector: 'app-ss-cinema',
  templateUrl: './ss-cinema.component.html',
  styleUrls: ['./ss-cinema.component.scss'],
})
export class SsCinemaComponent {
  @Input() cinemaSchedule!: CinemaScheduleDto[];
  @Output() sendShowtimeId = new EventEmitter<{
    cinema: Cinema;
    showtime: Showtime;
  }>();

  send(cinema: Cinema, showtime: Showtime): void {
    this.sendShowtimeId.emit({ cinema: cinema, showtime: showtime });
  }
}

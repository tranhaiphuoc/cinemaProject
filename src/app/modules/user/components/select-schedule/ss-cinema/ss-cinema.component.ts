import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';

@Component({
  selector: 'app-ss-cinema',
  templateUrl: './ss-cinema.component.html',
  styleUrls: ['./ss-cinema.component.scss'],
})
export class SsCinemaComponent {
  @Input() cinemaSchedule!: CinemaScheduleDto[];
  @Output() sendShowtimeId = new EventEmitter<{
    showtimeId: number;
    cinemaId: number;
  }>();

  send(cinemaId: number, showtimeId: number): void {
    this.sendShowtimeId.emit({ cinemaId: cinemaId, showtimeId: showtimeId });
  }
}

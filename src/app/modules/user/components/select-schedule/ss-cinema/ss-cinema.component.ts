import { Component, Input } from '@angular/core';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';

@Component({
  selector: 'app-ss-cinema',
  templateUrl: './ss-cinema.component.html',
  styleUrls: ['./ss-cinema.component.scss']
})
export class SsCinemaComponent {
  @Input() cinemaSchedule!: CinemaScheduleDto[];
}
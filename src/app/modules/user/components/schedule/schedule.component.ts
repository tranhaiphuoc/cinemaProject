import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
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

  cinemaId!: number;
  showtimeId!: number;
  
  cinemaScheduleList: CinemaDto[] = [];
  toggleCinemaSeat: boolean = false;

  constructor(private cinemaScheduleService: CinemaScheduleService) {}

  ngOnInit(): void {
    this.receive(new Date());
  }

  setShowtimeId({ cinemaId, showtimeId }: any): void {
    this.cinemaId = cinemaId;
    this.showtimeId = showtimeId;
    this.toggleCinemaSeat = true;
  }

  receive(date: Date): void {
    this.cinemaScheduleList = this.cinemaScheduleService.getAvailableSchedule(
      this.movie,
      date
    );
  }

  toggleSchedule(): void {
    if (this.toggleCinemaSeat == true) {
      this.toggleCinemaSeat = !this.toggleCinemaSeat;
    } else {
      this.toggle.emit();
    }
  }
}

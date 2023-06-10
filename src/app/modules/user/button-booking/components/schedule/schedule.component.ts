import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { Cinema } from 'src/app/models/cinema.model';
import { Movie } from 'src/app/models/movie.model';
import { Showtime } from 'src/app/models/showtime.model';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() toggle = new EventEmitter();

  cinema!: Cinema;
  showtime!: Showtime;
  selectedDate!: Date;
  
  cinemaScheduleList: CinemaDto[] = [];
  toggleTicketSelector: boolean = false;

  constructor(private cinemaScheduleService: CinemaScheduleService) {}

  ngOnInit(): void {
    this.receive(new Date());
  }

  setShowtimeId({ cinema, showtime }: any): void {
    this.cinema = cinema;
    this.showtime = showtime;
    this.toggleTicketSelector = true;
  }

  receive(date: Date): void {
    this.cinemaScheduleList = this.cinemaScheduleService.getAvailableSchedule(
      this.movie,
      date
    );
    this.selectedDate = date;
  }

  toggleSchedule(): void {
    if (this.toggleTicketSelector == false) {
      this.toggle.emit();
    }
  }

  toggleSelectTicket(): void {
    this.toggleTicketSelector = !this.toggleTicketSelector;
  }
}

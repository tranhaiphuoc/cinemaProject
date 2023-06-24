import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { DateTimeSchedule } from 'src/app/models/date-time-schedule.model';
import { Movie } from 'src/app/models/movie.model';
import { Schedule } from 'src/app/models/schedule.model';
import { Showtime } from 'src/app/models/showtime.model';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.scss'],
})
export class ScheduleManagementComponent {
  columns = ['STT', 'Tên', 'Thời lượng', 'Trạng thái', 'Tác vụ'];

  movieTS!: Movie;
  showAddRow = false;

  filterCinemaCenter!: string;
  filterCinema!: string;

  get getFilteredCinemaScheduleList(): CinemaDto[] {
    return this.cinemaScheduleService
      .getList()
      .filter((cinema) => cinema.cinemaCenter.name === this.filterCinemaCenter);
  }

  get getCinemaCenterArray(): string[] {
    const arrCinemaCenter: string[] = [];

    this.cinemaScheduleService.getList().forEach((cinemaDto) => {
      arrCinemaCenter.push(cinemaDto.cinemaCenter.name);
    });
    return arrCinemaCenter;
  }

  get getCinemaArray(): string[] {
    const arrCinema: string[] = [];
    this.getFilteredCinemaScheduleList[0].cinemaSchedule.forEach(
      (cinemaScheduleDto) => {
        if (!arrCinema.includes(cinemaScheduleDto.cinema.name)) {
          arrCinema.push(cinemaScheduleDto.cinema.name);
        }
      }
    );
    return arrCinema;
  }

  get getListMovie(): Movie[] {
    let movieList = new Array<Movie>();
    this.getFilteredCinemaScheduleList.forEach((cinemaDto) => {
      cinemaDto.cinemaSchedule.forEach((cinemaSchedule) => {
        if (cinemaSchedule.cinema.name === this.filterCinema) {
          cinemaSchedule.schedule.forEach((schedule) => {
            movieList.push(schedule.movie);
          });
        }
      });
    });
    return movieList;
  }

  get getListMovieNotExistsInCinemaCenter(): Movie[] {
    let movieList = new Array<Movie>();
    movieList = this.movieService
      .getList()
      .filter((movie) => !this.getListMovie.find((m) => m.id === movie.id));
    return movieList;
  }

  constructor(
    private cinemaScheduleService: CinemaScheduleService,
    public movieService: MovieService,
    private router: Router,
    private readonly _toastrService: ToastrService
  ) {
    if (this.getCinemaCenterArray.length > 0)
      this.filterCinemaCenter = this.getCinemaCenterArray[0];
    if (this.getCinemaArray.length > 0)
      this.filterCinema = this.getCinemaArray[0];
    this.movieTS = this.getListMovieNotExistsInCinemaCenter[0];
  }

  getStatus(status: number): string {
    return status ? 'Đang hoạt động' : 'Không hoạt động';
  }

  getStatusColor(status: number): string {
    switch (status) {
      case 1:
        return 'green';
      case 0:
        return 'red';
      default:
        return 'black';
    }
  }

  getMovie(movie: Movie) {
    this.movieTS = movie;
  }

  getMovieAndGotoDetailPage(movie: Movie) {
    this.movieTS = movie;
    this.router.navigate(['admin/schedule/details', this.getIndexCinemaDto(), this.getIndexCinemaSchedule(), this.getIndexSchedule()]);
  }

  deleteSchedule() {
    this.getFilteredCinemaScheduleList.forEach((cinemaDto) => {
      cinemaDto.cinemaSchedule.forEach((cinemaSchedule) => {
        if (cinemaSchedule.cinema.name === this.filterCinema) {
          cinemaSchedule.schedule.forEach((schedule) => {
            cinemaSchedule.schedule = cinemaSchedule.schedule.filter(
              (schedule) => schedule.movie !== this.movieTS
            );
          });
        }
      });
    });
  }

  addRow() {
    if (this.getListMovieNotExistsInCinemaCenter.length != 0) {
      this.showAddRow = true;
    } else {
      this._toastrService.success("Không còn phim để thêm!");
    }
  }

  onSelectCinemaCenter() {
    this.movieTS = this.getListMovieNotExistsInCinemaCenter[0];
  }

  resetCinema() {
    this.filterCinema = this.getCinemaArray[0];
    this.showAddRow = false;
  }

  addSchedule() {
    let cinemaDto = this.getFilteredCinemaScheduleList[0];
    let schedule = new Schedule();
    let index = cinemaDto.cinemaSchedule.findIndex(
      (item) => item.cinema.name === this.filterCinema
    );

    schedule.id = cinemaDto.cinemaSchedule[index].schedule.length + 1;
    schedule.movie = this.movieTS;
    schedule.dateTime = new Array<DateTimeSchedule>();

    cinemaDto.cinemaSchedule[index].schedule.push(schedule);

    this.onSelectCinemaCenter();

    this.showAddRow = false;

    this._toastrService.success("Thêm thành công!");
}

  getIndexCinemaDto(): number {
    return this.cinemaScheduleService.getList().findIndex(item => item.cinemaCenter.name === this.filterCinemaCenter);
  }

  getIndexCinemaSchedule(): number {
    return this.cinemaScheduleService.getList()[this.getIndexCinemaDto()].cinemaSchedule.findIndex(item => item.cinema.name === this.filterCinema);
  }

  getIndexSchedule(): number {
    return this.cinemaScheduleService.getList()[this.getIndexCinemaDto()].cinemaSchedule[this.getIndexCinemaSchedule()].schedule.findIndex(item => item.movie === this.movieTS);
  }
}
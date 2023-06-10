import { Component } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaCenter } from 'src/app/models/cinema-center.model';

@Component({
  selector: 'app-cinema-management',
  templateUrl: './cinema-management.component.html',
  styleUrls: ['./cinema-management.component.scss']
})
export class CinemaManagementComponent {
  columns = [
    'STT', 'Rạp trung tâm', 'Rạp', ''
  ]

  isDisableButton = false;

  cinemaCenterInput!: string;
  cinemaInput!: string;

  indexCinemaCenter = 0;
  indexCinema = 0;

  constructor(public cinemaScheduleService: CinemaScheduleService) { }

  resetValue() {
    this.cinemaCenterInput = '';
    this.cinemaInput = '';
  }

  isInValidButtonUpdate() {
    if (this.cinemaCenterInput && this.cinemaInput) {
      this.isDisableButton = false;
    } else
      this.isDisableButton = true;
  }

  getIndex(i: number, j: number) {
    this.indexCinemaCenter = i;
    this.indexCinema = j;

<<<<<<< HEAD
    //this.cinemaCenterInput = this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaCenter;
    this.cinemaInput =  this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule[this.indexCinema].cinema.name;
  }

  update() {
    if(this.cinemaCenterInput && this.cinemaInput) {
      //this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaCenter = this.cinemaCenterInput;
=======
    this.cinemaCenterInput = '';//this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaCenter;
    this.cinemaInput = this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule[this.indexCinema].cinema.name;
  }

  update() {
    if (this.cinemaCenterInput && this.cinemaInput) {
      this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaCenter = new CinemaCenter;
>>>>>>> e874156a281d869c8563bcadbfb9bed01987c84d
      this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule[this.indexCinema].cinema.name = this.cinemaInput;
    }
  }

  deleteCinemaCenter() {
    this.cinemaScheduleService.getList().splice(this.indexCinemaCenter, 1);
  }

  getIdCinema(): number {
    let id = 0;
    this.cinemaScheduleService.getList().forEach(cinemaSchedule => {
      cinemaSchedule.cinemaSchedule.forEach(cinemaScheduleChild => {
        id = cinemaScheduleChild.cinema.id;
      })
    });
    return id + 1;
  }

  add() {
    let cinemaDto = new CinemaDto;

<<<<<<< HEAD
    // cinemaDto.cinemaCenter = this.cinemaCenterInput;
=======
    cinemaDto.cinemaCenter = new CinemaCenter;
>>>>>>> e874156a281d869c8563bcadbfb9bed01987c84d

    let cinemaScheduleDto = new CinemaScheduleDto;

    cinemaScheduleDto.cinema = new Cinema(this.getIdCinema(), this.cinemaInput);

    cinemaDto.cinemaSchedule.push(cinemaScheduleDto);

    this.cinemaScheduleService.getList().push(cinemaDto);
  }
}

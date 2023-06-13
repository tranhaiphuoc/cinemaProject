import { Component } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaCenter } from 'src/app/models/cinema-center.model';
import { CinemaCenterService } from 'src/app/services/cinema-center.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-management',
  templateUrl: './cinema-management.component.html',
  styleUrls: ['./cinema-management.component.scss'],
})
export class CinemaManagementComponent {
  columns = ['STT', 'Rạp trung tâm', 'Tác vụ'];

  cinemaCenterIndex!: number;
  cinemaCenterIndexUpdate!: number;

  isUpdate = false;

  cinemaCenterNameUpdate = '';
  cinemaCenterName = '';

  constructor(
    public cinemaScheduleService: CinemaScheduleService,
    private cinemaCenterService: CinemaCenterService,
    private router: Router
  ) {}

  gotoDetailPage() {
    this.router.navigate(['admin/cinema/details', this.cinemaCenterIndex]);
  }

  setIndexCinemaCenter(index: number) {
    this.cinemaCenterIndex = index;
  }

  setIndexCinemaCenterUpdate(index: number) {
    if (this.isUpdate == false) this.cinemaCenterIndexUpdate = index;
  }

  setUpdate() {
    this.isUpdate = true;
    this.cinemaCenterNameUpdate =
      this.cinemaScheduleService.getList()[
        this.cinemaCenterIndexUpdate
      ].cinemaCenter.name;
  }

  deleteCinemaCenter() {
    if (!this.isUpdate)
      this.cinemaScheduleService.getList().splice(this.cinemaCenterIndex, 1);
  }

  isValidCinemaCenterNameUpdate(): boolean {
    if (this.cinemaCenterNameUpdate == '') return false;
    return true;
  }

  isValidCinemaCenterName(): boolean {
    if (this.cinemaCenterName == '') return false;
    return true;
  }

  addCinemaCenter() {
    let cinemaDto = new CinemaDto();

    cinemaDto.id = this.cinemaScheduleService.getList().length + 1;

    cinemaDto.cinemaCenter = new CinemaCenter();

    cinemaDto.cinemaCenter.id = this.cinemaCenterService.getList().length + 1;
    cinemaDto.cinemaCenter.name = this.cinemaCenterName;

    cinemaDto.cinemaCenter.cinema = [];

    this.cinemaCenterService.getList().push(cinemaDto.cinemaCenter);

    this.cinemaScheduleService.getList().push(cinemaDto);

    this.cinemaCenterName = '';
  }

  updateCinemaCenter() {
    this.cinemaScheduleService.getList()[
      this.cinemaCenterIndexUpdate
    ].cinemaCenter.name = this.cinemaCenterNameUpdate;
    this.isUpdate = false;
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { CinemaCenter } from 'src/app/models/cinema-center.model';
import { Cinema } from 'src/app/models/cinema.model';
import { CinemaCenterService } from 'src/app/services/cinema-center.service';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {
  columns = ['STT', 'Rạp', 'Tác vụ'];

  indexCinemaCenter!: number;
  cinemaCenterName!: string;

  cinemaNameUpdate = '';
  cinemaName = '';

  cinemaLst: Cinema[] = [];
  cinemaIndex: number | undefined;

  isUpdate = false;
  cinemaIndexUpdate!: number;

  constructor(private cinemaService: CinemaCenterService, 
    private cinemaScheduleService: CinemaScheduleService, 
    private route: ActivatedRoute,
    private readonly _toastrService: ToastrService
    ) {}

  ngOnInit() {
    this.indexCinemaCenter = parseInt(
      this.route.snapshot.paramMap.get('indexCinemaCenter') as string
    );

    this.cinemaCenterName = this.cinemaService.getList()[this.indexCinemaCenter].name;
  }

  getListCinema() : Cinema[] {
    return this.cinemaService.getList()[this.indexCinemaCenter as number].cinema;
  }

  setIndexCinema(index: number) {
    this.cinemaIndex = index;
  }

  deleteCinema() {
    this.cinemaService.getList()[this.indexCinemaCenter].cinema.splice(this.cinemaIndex as number, 1);
    this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule.splice(this.cinemaIndex as number, 1);
    this._toastrService.success("Xóa thành công!");
  }

  setIndexCinemaUpdate(index: number) {
    if (this.isUpdate == false) this.cinemaIndexUpdate = index;
  }

  isValid() : boolean {
    if(this.cinemaNameUpdate == '')
      return false;
    return true;
  }

  isValidAdd() : boolean {
    if(this.cinemaName == '')
      return false;
    return true;
  }

  setUpdate() {
    this.isUpdate = true;
    this.cinemaNameUpdate = this.cinemaService.getList()[this.indexCinemaCenter].cinema[this.cinemaIndex as number].name;
  }

  isExist(): boolean {
    let isExist = false;
    let index = 0;
    this.cinemaService.getList()[this.indexCinemaCenter].cinema.forEach(cinema => {
      if(index++ == this.cinemaIndex)
        return;
      if(cinema.name.toLowerCase() === this.cinemaNameUpdate.toLowerCase())
        isExist = true;
    });
    return isExist;
  }

  updateCinemaName() {
    if(this.isExist()) {
      this._toastrService.error("Tên rạp đã tồn tại trong hệ thống!");
      return;
    }
    this.cinemaService.getList()[this.indexCinemaCenter].cinema[this.cinemaIndex as number].name = this.cinemaNameUpdate;

    this.cinemaNameUpdate = '';

    this.isUpdate = false;

    this._toastrService.success("Chỉnh sửa tên thành công!");
  }

  getIdCinema() : number {
    let index = 1;
    this.cinemaService.getList().forEach(cinemaCenter => {
      cinemaCenter.cinema.forEach(cinema => {
        index++;
      })
    });
    return index;
  }

  addCinema() {
    this.cinemaIndex = -1;
    this.cinemaNameUpdate = this.cinemaName;
    if(this.isExist()) {
      this._toastrService.error('Tên rạp đã tồn tại trong hệ thống!');
      return;
    }

    let cinema = new Cinema(this.getIdCinema(), this.cinemaName);
    this.cinemaService.getList()[this.indexCinemaCenter].cinema.push(cinema);

    let cinemaScheduleDTO = new CinemaScheduleDto();
    cinemaScheduleDTO.cinema = cinema;
    cinemaScheduleDTO.schedule = [];

    this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule.push(cinemaScheduleDTO);
    this.cinemaName = '';
    this._toastrService.success("Thêm thành công!");
  }
}

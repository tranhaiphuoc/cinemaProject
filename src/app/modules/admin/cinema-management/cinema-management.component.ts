import { Component } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';
import { CinemaCenter } from 'src/app/models/cinema-center.model';
import { CinemaCenterService } from 'src/app/services/cinema-center.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CinemaSeatService } from 'src/app/services/cinema-seat.service';

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
    private cinemaSeatService: CinemaSeatService,
    private router: Router,
    private readonly _toastrService: ToastrService
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

  resetIdSeat() {
    let cinemaSeat = this.cinemaSeatService.getList();
    
    let count = 1;
    let id = 1;
    cinemaSeat.forEach(seat => {
      seat.id = count++;
      seat.cinameId = id;
      if(seat.name == 'M08')
        id++;
    });
  }

  deleteCinemaSeats(cinemaId: number) {
    let cinemaSeat = this.cinemaSeatService.getList();
    
    for (let i = cinemaSeat.length - 1; i >= 0; i--) {
      if (cinemaSeat[i].cinameId === cinemaId)
        cinemaSeat.splice(i, 1);
    }
    this.resetIdSeat();
  }

  deleteCinemaCenter() {
    debugger;
    this.cinemaScheduleService.getList()[this.cinemaCenterIndex].cinemaCenter.cinema.forEach(cinema => {
      this.deleteCinemaSeats(cinema.id);
    });

    if (!this.isUpdate)
      this.cinemaScheduleService.getList().splice(this.cinemaCenterIndex, 1);
    this._toastrService.success("Xóa thành công!");
  }

  isValidCinemaCenterNameUpdate(): boolean {
    if (this.cinemaCenterNameUpdate == '') 
      return false;
    return true;
  }

  isValidCinemaCenterName(): boolean {
    if (this.cinemaCenterName == '')
      return false;
    return true;
  }

  addCinemaCenter() {
    this.cinemaCenterIndexUpdate = -1;
    this.cinemaCenterNameUpdate = this.cinemaCenterName;
    if(this.isExist()) {
      this._toastrService.error("Tên rạp trung tâm đã tồn tại trong hệ thống");
      return
    }
    let cinemaDto = new CinemaDto();

    cinemaDto.id = this.cinemaScheduleService.getList().length + 1;

    cinemaDto.cinemaCenter = new CinemaCenter();

    cinemaDto.cinemaCenter.id = this.cinemaCenterService.getList().length + 1;
    cinemaDto.cinemaCenter.name = this.cinemaCenterName;

    cinemaDto.cinemaCenter.cinema = [];

    this.cinemaCenterService.getList().push({
      id: cinemaDto.cinemaCenter.id,
      name: cinemaDto.cinemaCenter.name,
      cinema: cinemaDto.cinemaCenter.cinema
    });

    this.cinemaScheduleService.getList().push({
      id: cinemaDto.id,
      cinemaCenter: cinemaDto.cinemaCenter,
      cinemaSchedule: cinemaDto.cinemaSchedule
    });

    this.cinemaCenterName = '';

    this._toastrService.success("Thêm thành công!");
  }

  isExist(): boolean {
    let isExist = false;
    let index = 0;
    this.cinemaScheduleService.getList().forEach(cinemaDTO => {
      if(index++ == this.cinemaCenterIndexUpdate)
        return;
      if(cinemaDTO.cinemaCenter.name.toLowerCase() === this.cinemaCenterNameUpdate.toLowerCase())
        isExist = true;
    });
    return isExist;
  }

  updateCinemaCenter() {
    if(this.isExist()) {
      this._toastrService.error("Tên rạp trung tâm đã tồn tại trong hệ thống!");
      return;
    }
    debugger;
    this.cinemaScheduleService.getList()[
      this.cinemaCenterIndexUpdate
    ].cinemaCenter.name = this.cinemaCenterNameUpdate;
    this.isUpdate = false;

    this._toastrService.success("Chỉnh sửa thành công!");
  }
}
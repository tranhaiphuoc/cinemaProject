import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CinemaScheduleDto } from 'src/app/dto/cinema-schedule-dto';
import { CinemaCenter } from 'src/app/models/cinema-center.model';
import { Cinema } from 'src/app/models/cinema.model';
import { SeatType } from 'src/app/models/seat-type';
import { Seat } from 'src/app/models/seat.model';
import { CinemaCenterService } from 'src/app/services/cinema-center.service';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';
import { CinemaSeatService } from 'src/app/services/cinema-seat.service';
import { SeatTypeService } from 'src/app/services/seat-type.service';

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

  seatTypeList: SeatType[] = this.seatTypeService.getList();

  constructor(
    private cinemaService: CinemaCenterService, 
    private cinemaScheduleService: CinemaScheduleService, 
    private cinemaSeatService: CinemaSeatService,
    private seatTypeService: SeatTypeService,
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

  deleteCinema() {
    this.deleteCinemaSeats(this.cinemaService.getList()[this.indexCinemaCenter].cinema[this.cinemaIndex as number].id);

    this.cinemaService.getList()[this.indexCinemaCenter].cinema.splice(this.cinemaIndex as number, 1);
    this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule.splice(this.cinemaIndex as number, 1);
    this._toastrService.success("Xóa thành công!");
  }

  setIndexCinemaUpdate(index: number) {
    if (this.isUpdate == false) 
      this.cinemaIndexUpdate = index;
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

  AddSeats(cinemaId: number): void {
    const rows = ['A', 'B', 'C', 'M'];
    const cols = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'];
    
    let index = this.cinemaSeatService.getList().length;
  
    for (let row of rows) {
      for (let col of cols) {
        let type = this.seatTypeList[0];
  
        if (row === 'M') {
          type = this.seatTypeList[2];
        }

        if(row === 'M' && parseInt(col) > 8)
          continue;

        const seat = new Seat;
        seat.id = index + 1;
        seat.cinameId = cinemaId;
        seat.name = `${row}${col}`;
        seat.type = type;
        seat.status = 1;

        this.cinemaSeatService.getList().push(seat);
  
        index++;
      }
    }
  }

  addCinema() {
    this.cinemaIndex = -1;
    this.cinemaNameUpdate = this.cinemaName;
    if(this.isExist()) {
      this._toastrService.error('Tên rạp đã tồn tại trong hệ thống!');
      return;
    }
    let cinema = new Cinema(this.getIdCinema(), this.cinemaName);
    
    this.AddSeats(cinema.id);

    this.cinemaService.getList()[this.indexCinemaCenter].cinema.push({
      id: cinema.id,
      name: cinema.name
    });

    let cinemaScheduleDTO = new CinemaScheduleDto();
    cinemaScheduleDTO.cinema = {
      id: cinema.id,
      name: cinema.name
    };
    cinemaScheduleDTO.schedule = [];

    this.cinemaScheduleService.getList()[this.indexCinemaCenter].cinemaSchedule.push({
      cinema: cinemaScheduleDTO.cinema,
      schedule: cinemaScheduleDTO.schedule
    });

    this.cinemaName = '';
    this._toastrService.success("Thêm thành công!");
  }
}

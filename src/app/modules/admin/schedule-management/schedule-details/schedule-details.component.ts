import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTimeSchedule } from 'src/app/models/date-time-schedule.model';
import { Showtime } from 'src/app/models/showtime.model';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';

class MenuItem {
  label!: string;
  isActive!: boolean;
  isUpdate!: boolean;
  subMenuItems?: MenuItem[];
}

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss'],
})
export class ScheduleDetailsComponent implements OnInit {
  indexCinemaDto!: number;
  indexCinemaSchedule!: number;
  indexSchedule!: number;

  isUpdate = false;

  menuItems: MenuItem[] = [];
  menuItemTS!: MenuItem | undefined;

  hour!: number | undefined;
  minute!: number | undefined;
  hourUpdate!: number | undefined;
  minuteUpdate!: number | undefined;

  date!: string | undefined;
  indexDate!: number;
  indexTime!: number;

  isDeleteDate = false;

  constructor(
    private route: ActivatedRoute,
    public cinemaScheduleService: CinemaScheduleService
  ) {}

  ngOnInit() {
    this.indexCinemaDto = parseInt(
      this.route.snapshot.paramMap.get('indexCinemaDto') as string
    );
    this.indexCinemaSchedule = parseInt(
      this.route.snapshot.paramMap.get('indexCinemaSchedule') as string
    );
    this.indexSchedule = parseInt(
      this.route.snapshot.paramMap.get('indexSchedule') as string
    );

    this.reloadMenuItems();
  }

  reloadMenuItems() {
    this.menuItems = [];

    this.cinemaScheduleService
      .getList()
      [this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[
        this.indexSchedule
      ].dateTime.forEach((dateTime) => {
        let menuItem = new MenuItem();
        menuItem.label = this.getDate(dateTime.date);
        menuItem.isActive = false;
        menuItem.isUpdate = false;
        menuItem.subMenuItems = [];

        dateTime.time.forEach((time) => {
          let subMenuItem = new MenuItem();
          subMenuItem.label = this.getHourAndMinute(time.hour, time.minute);
          subMenuItem.isActive = false;
          subMenuItem.isUpdate = false;

          if (menuItem.subMenuItems) menuItem.subMenuItems.push(subMenuItem);
        });
        this.menuItems.push(menuItem);
      });
  }

  getDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day < 10 ? '0' + day : day}/${
      month < 10 ? '0' + month : month
    }/${year}`;
  }

  convertDateToString(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;
  }

  getHourAndMinute(hour: number, minute: number): string {
    let hourF = hour.toString();
    let minuteF = minute.toString();

    if (hourF.length == 1) hourF = '0' + hourF;
    if (minuteF.length == 1) minuteF = '0' + minuteF;

    return hourF + ':' + minuteF;
  }

  toggleActive(menuItem: MenuItem) {
    if (!this.isUpdate) {
      if (this.menuItemTS) {
        if (menuItem === this.menuItemTS) {
          menuItem.isActive = !menuItem.isActive;
          this.menuItemTS = undefined;
          this.hour = undefined;
          this.minute = undefined;
        }
      } else {
        menuItem.isActive = !menuItem.isActive;
        this.menuItemTS = menuItem;
      }
    }
  }

  toggleUpdate(menuItem: MenuItem) {
    if (!this.isUpdate) {
      menuItem.isUpdate = true;
      this.isUpdate = true;
    }
  }

  isDisableButton(): boolean {
    if (this.hour == undefined || this.minute == undefined) return true;
    if (
      this.hour <= 0 ||
      this.minute < 0 ||
      this.hour > 23 ||
      this.minute > 59 ||
      this.hour == undefined ||
      this.minute == undefined
    )
      return true;
    return false;
  }

  isDisableButtonUpdate(): boolean {
    if (this.hourUpdate == undefined || this.minuteUpdate == undefined)
      return true;
    if (
      this.hourUpdate <= 0 ||
      this.minuteUpdate < 0 ||
      this.hourUpdate > 23 ||
      this.minuteUpdate > 59 ||
      this.hourUpdate == undefined ||
      this.minuteUpdate == undefined
    )
      return true;
    return false;
  }

  getIndexDate(index: number) {
    if (!this.isUpdate) {
      this.date = this.convertDateToString(
        this.cinemaScheduleService.getList()[this.indexCinemaDto]
          .cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule]
          .dateTime[index].date
      );
      this.indexDate = index;
    }
  }

  getIndexTime(index: number) {
    if (!this.isUpdate) {
      this.hourUpdate =
        this.cinemaScheduleService.getList()[
          this.indexCinemaDto
        ].cinemaSchedule[this.indexCinemaSchedule].schedule[
          this.indexSchedule
        ].dateTime[this.indexDate].time[index].hour;
      this.minuteUpdate =
        this.cinemaScheduleService.getList()[
          this.indexCinemaDto
        ].cinemaSchedule[this.indexCinemaSchedule].schedule[
          this.indexSchedule
        ].dateTime[this.indexDate].time[index].minute;
    }
    this.indexTime = index;
  }

  saveDate(menuItem: MenuItem) {
    const newDate = new Date(this.date as string);

    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[
      this.indexCinemaSchedule
    ].schedule[this.indexSchedule].dateTime[this.indexDate].date = newDate;

    this.isUpdate = false;
    menuItem.isUpdate = false;

    this.reloadMenuItems();
  }

  deleteDate() {
    const newDate = new Date(this.date as string);

    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[
      this.indexCinemaSchedule
    ].schedule[this.indexSchedule].dateTime = this.cinemaScheduleService
      .getList()
      [this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[
        this.indexSchedule
      ].dateTime.filter((item) => item.date.getDate() !== newDate.getDate());

    this.reloadMenuItems();
  }

  deleteTime(menuItem: MenuItem) {
    const hour = menuItem.label.split(':')[0].replace(/^0+/, '');
    let minute = menuItem.label.split(':')[1];

    if (minute.length == 2 && minute[1] == '0') {
      minute = minute.slice(0, -1);
    }

    const newDate = new Date(this.date as string);

    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[
      this.indexCinemaSchedule
    ].schedule[this.indexSchedule].dateTime[this.indexDate].time =
      this.cinemaScheduleService
        .getList()
        [this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[
          this.indexSchedule
        ].dateTime[this.indexDate].time.filter(
          (time) =>
            time !==
            this.cinemaScheduleService.getList()[this.indexCinemaDto]
              .cinemaSchedule[this.indexCinemaSchedule].schedule[
              this.indexSchedule
            ].dateTime[this.indexDate].time[this.indexTime]
        );

    this.reloadMenuItems();

    this.menuItemTS = undefined;
  }

  updateTime() {
    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[
      this.indexCinemaSchedule
    ].schedule[this.indexSchedule].dateTime[this.indexDate].time[
      this.indexTime
    ].hour = this.hourUpdate as number;
    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[
      this.indexCinemaSchedule
    ].schedule[this.indexSchedule].dateTime[this.indexDate].time[
      this.indexTime
    ].minute = this.minuteUpdate as number;

    this.reloadMenuItems();

    this.isUpdate = false;
    this.menuItemTS = undefined;
  }

  setIsDeleteDate(status: boolean) {
    this.isDeleteDate = status;
  }

  isEqualsDate() : boolean {
    let found = false;

    const newDate = new Date(this.date as string);
  
    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule].dateTime.forEach(dateTime => {
      if(dateTime.date !== this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule].dateTime[this.indexDate].date) {
        if((dateTime.date.getDate()) === newDate.getDate()) {
          found = true;
          return;
        }
      }
    });
    return found;
  }

  isEqualsDateAdd() : boolean {
    let found = false;
    if(this.date === undefined)
      return true;
    
    const newDate = new Date(this.date as string);
  
    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule].dateTime.forEach(dateTime => {
        if((dateTime.date.getDate()) === newDate.getDate()) {
          found = true;
          return;
        }
      });
    
    return found;
  }

  getShowTimeId(): number {
    const cinemaSchedules = this.cinemaScheduleService.getList();
    const lastSchedule = cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule[cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule.length - 1].schedule;
    const lastDateTime = lastSchedule[lastSchedule.length - 1].dateTime;
    const lastTime = lastDateTime[lastDateTime.length - 1].time;
    if (lastTime.length == 0)
      return 1;
    const lastId = lastTime[lastTime.length - 1].id;
    return lastId + 1;
  }

  addTime() {
    if(this.hour !== undefined && this.minute !== undefined) {
      let showTime = new Showtime(this.getShowTimeId(), this.indexSchedule + 1, this.hour, this.minute);
      this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule].dateTime[this.indexDate].time.push(showTime);
      
      this.reloadMenuItems();

      this.menuItemTS = undefined;
      this.hour = undefined;
      this.minute = undefined;
    }
  }

  getScheduleId(): number {
    const cinemaSchedules = this.cinemaScheduleService.getList();
    const lastSchedule = cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule[cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule.length - 1].schedule;
    const lastDateTime = lastSchedule[lastSchedule.length - 1].dateTime;
    const lastId = lastDateTime[lastDateTime.length - 1].id;

    return lastId + 1;
  }

  addDate() {
    const newDate = new Date(this.date as string);
    
    let dateTimeSchedule = new DateTimeSchedule();

    dateTimeSchedule.time = [];
    dateTimeSchedule.id = this.getScheduleId();
    dateTimeSchedule.date = newDate;

    this.cinemaScheduleService.getList()[this.indexCinemaDto].cinemaSchedule[this.indexCinemaSchedule].schedule[this.indexSchedule].dateTime.push(dateTimeSchedule);

    this.reloadMenuItems();

    this.menuItemTS = undefined;
    this.hour = undefined;
    this.minute = undefined;
    this.date = undefined;
  }
}

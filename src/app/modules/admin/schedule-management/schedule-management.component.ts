import { Component, ElementRef, ViewChild } from '@angular/core';
import { CinemaDto } from 'src/app/dto/cinema-dto';
import { DateTimeSchedule } from 'src/app/models/date-time-schedule.model';
import { Showtime } from 'src/app/models/showtime.model';
import { CinemaScheduleService } from 'src/app/services/cinema-schedule.service';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.scss']
})
export class ScheduleManagementComponent {
  columns = [
    'STT', 'Rạp trung tâm', 'Mã', 'Tên', 'Thời lượng', 'Trạng thái', 'Rạp', 'Lịch trình chiếu'
  ]

  dateInput!: string;
  hourInput!: string;
  minuteInput!: string;

  @ViewChild('dateInput') dateInput1!: ElementRef;
  @ViewChild('hourInput') hourInput1!: ElementRef;
  @ViewChild('minuteInput') minuteInput1!: ElementRef;

  timeTS!: Showtime;
  dateTimeSchedule!: DateTimeSchedule;
  i!: number;
  j!: number;
  k!: number;
  dateStr!: string;
  isDisabledButton = true;

  constructor(public cinemaScheduleService: CinemaScheduleService) { }

  isValidButtonUpdate() {
    if (this.dateInput1 && this.hourInput1 && this.minuteInput1) {
      const dateStr = this.dateInput1.nativeElement.value;
      const hour = this.hourInput1.nativeElement.value;
      const minute = this.minuteInput1.nativeElement.value;

      if (dateStr.trim() !== '' && hour.trim() !== '' && minute.trim() !== '' &&
        hour.length <= 2 && minute.length <= 2 && parseInt(hour) <= 23 && parseInt(minute) <= 59)
        this.isDisabledButton = false;
      else
        this.isDisabledButton = true;
    } else
      this.isDisabledButton = true;
  }

  isValidButtonAdd() {
    if ((this.dateInput && this.hourInput && this.minuteInput)) {
      this.isDisabledButton = false;
      if (parseInt(this.hourInput) > 23 || parseInt(this.minuteInput) > 59
        || this.hourInput.toString().length > 2 || this.minuteInput.toString().length > 2)
        this.isDisabledButton = true;
    } else
      this.isDisabledButton = true;
  }

  getStatus(status: number): string {
    if (status)
      return 'Đang hoạt động';
    return 'Không hoạt động';
  }

  deleteTime() {
    this.cinemaScheduleService.getList().forEach(cinema => {
      cinema.cinemaSchedule.forEach(schedule => {
        schedule.schedule.forEach(s => {
          s.dateTime.forEach(dt => {
            dt.time = dt.time.filter(t => t !== this.timeTS);
          });
        });
      });
    });
  }

  convertDateToString(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

  update() {
    if (this.hourInput1 && this.minuteInput1 && this.dateInput1) {
      const hour = this.hourInput1.nativeElement.value;
      const minute = this.minuteInput1.nativeElement.value;
      const date = this.dateInput1.nativeElement.value;

      this.timeTS.hour = hour;
      this.timeTS.minute = minute;

      const newDate = new Date(date);
      this.dateTimeSchedule.date = newDate;
    }
  }

  isValidButton(dateTimeSchedule: DateTimeSchedule[], showTimeNow: Showtime): boolean {
    let lastShowTime = showTimeNow;
    dateTimeSchedule.forEach(dateTime => {
      dateTime.time.forEach(time => {
        lastShowTime = time;
      })
    });

    if (showTimeNow == lastShowTime)
      return true;
    return false;
  }

  getTimeAndDate(time: Showtime, dateSchedule: DateTimeSchedule) {
    this.timeTS = time;
    this.dateInput = this.convertDateToString(dateSchedule.date);
    this.dateStr = this.convertDateToString(dateSchedule.date);
    this.dateTimeSchedule = dateSchedule;
  }

  setIndex(i: number, j: number, k: number) {
    this.i = i;
    this.j = j;
    this.k = k;
    this.dateInput = '';
    this.hourInput = '';
    this.minuteInput = '';
  }

  getScheduleId(): number {
    const cinemaSchedules = this.cinemaScheduleService.getList();
    const lastSchedule = cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule[cinemaSchedules[cinemaSchedules.length - 1].cinemaSchedule.length - 1].schedule;
    const lastDateTime = lastSchedule[lastSchedule.length - 1].dateTime;
    const lastId = lastDateTime[lastDateTime.length - 1].id;

    return lastId + 1;
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

  add(cinemaDto: CinemaDto[]) {
    const newDate = new Date(this.dateInput);

    let schedule = new DateTimeSchedule();
    schedule.date = newDate;
    schedule.id = this.getScheduleId();

    let time = new Showtime(this.getShowTimeId(), schedule.id, parseInt(this.hourInput), parseInt(this.minuteInput));

    schedule.time.push(time);
    cinemaDto[this.i].cinemaSchedule[this.j].schedule[this.k].dateTime.push(schedule);
  }
}

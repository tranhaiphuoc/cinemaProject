import { Time } from '@angular/common';

export class Showtime implements IShowtime {
  id!: number;
  scheduleId!: number;
  hour!: number;
  minute!: number;

  constructor(id: number, scheduleId: number, hour: number, minute: number) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.hour = hour;
    this.minute = minute;
  }
}

export interface IShowtime {
  id: number;
  scheduleId: number;
  hour: number;
  minute: number;
}

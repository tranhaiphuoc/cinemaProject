import { Time } from '@angular/common';

export class Showtime implements IShowtime {
  id!: number;
  hour!: number;
  minute!: number;

  constructor(id: number, hour: number, minute: number) {
    this.id = id;
    this.hour = hour;
    this.minute = minute;
  }
}

export interface IShowtime {
  id: number;
  hour: number;
  minute: number;
}

import { Injectable } from '@angular/core';
import { SeatType } from '../models/seat-type';

@Injectable({
  providedIn: 'root',
})
export class SeatTypeService {
  private seatTypeList: SeatType[] = [
    {
      id: 1,
      name: 'single',
      price: 10000,
    },
    {
      id: 2,
      name: 'single',
      price: 20000,
    },
    {
      id: 3,
      name: 'double',
      price: 25000,
    },
    {
      id: 4,
      name: 'double',
      price: 45000,
    },
  ];

  constructor() {}

  getList(): SeatType[] {
    return this.seatTypeList;
  }
}

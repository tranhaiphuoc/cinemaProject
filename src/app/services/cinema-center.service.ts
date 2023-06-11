import { Injectable } from '@angular/core';
import { CinemaCenter } from '../models/cinema-center.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaCenterService {
  private cinemaCenterList: CinemaCenter[] = [
    {
      id: 1,
      name: 'CGV Hùng Vương Plaza',
      cinema: [
        {
          id: 1,
          name: '2D Cinema',
        },
        {
          id: 2,
          name: '3D Cinema',
        },
      ],
    },
    {
      id: 2,
      name: 'CGV Thảo Điền Pearl',
      cinema: [
        {
          id: 3,
          name: '2D Cinema',
        },
      ],
    },
  ];

  constructor() {}

  getList(): CinemaCenter[] {
    return this.cinemaCenterList;
  }

  getById(id: number): CinemaCenter | undefined {
    return this.cinemaCenterList.find((cinemaCenter) => {
      return cinemaCenter.id == id;
    });
  }
}

import { SeatType } from './seat-type';

export class Seat {
  id!: number;
  cinameId!: number;
  name!: string;
  type!: SeatType;
  status!: number;
}

import { Seat } from "./seat.model";

export class BookingDetails {
  id!: number;
  bookingId!: number;
  seat!: Seat;
  price!: number;
}

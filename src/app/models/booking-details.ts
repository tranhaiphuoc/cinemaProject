import { Seat } from "./seat.model";

export class BookingDetails {
  private static _id = 0;

  id!: number;
  bookingId!: number;
  seat!: Seat;
  price!: number;

  constructor(bookingId: number, seat: Seat, price: number) {
    this.id = ++BookingDetails._id;
    this.bookingId = bookingId;
    this.seat = seat;
    this.price = price;
  }
}

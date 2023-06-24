import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingDetails } from 'src/app/models/booking-details';
import { Cinema } from 'src/app/models/cinema.model';
import { Movie } from 'src/app/models/movie.model';
import { SeatType } from 'src/app/models/seat-type';
import { Seat } from 'src/app/models/seat.model';
import { Showtime } from 'src/app/models/showtime.model';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { CinemaBookingService } from 'src/app/services/cinema-booking.service';
import { CinemaSeatService } from 'src/app/services/cinema-seat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.scss']
})
export class SelectSeatComponent {
  @Output() toggle = new EventEmitter();

  @Input() movie!: Movie;
  @Input() selectedDate!: Date;
  @Input() cinema!: Cinema;
  @Input() showtime!: Showtime;
  @Input() seats!: Seat[];
  @Input() selectedSeatTypeQuantityArr!: {
    seatType: SeatType;
    quantity: number;
    selected: number;
  }[];

  stateOfSeats!: boolean[];
  toggleSeatSelector: boolean = false;

  bookingSeat: number = 0;
  currentSeat: number = 0;

  //#region Seat Position
  countSeat: number = 0;
  breakPoint: number = 16;
  leftPosInit: number = 4;
  
  margin: number = 0.3;
  side: number = 2.2;
  sideDouble: number = this.side * 2 + this.margin;

  topPos: number = 3;
  leftPosSingle: number = this.leftPosInit;
  leftPosDouble: number = this.leftPosInit - this.side - this.margin;
  //#endregion

  topCalc(): number {
    if (this.countSeat == this.breakPoint) {
      this.countSeat = 0;
      this.topPos += this.side + this.margin;
      this.leftPosSingle = this.leftPosInit;
    }
    return this.topPos
  }

  get top(): number {
    // if (this.countSeat == this.breakPoint) {
    //   this.countSeat = 0;
    //   this.topPos += this.side + this.margin;
    //   this.leftPosSingle = this.leftPosInit;
    // }
    return this.topCalc();
  }

  leftCalc(): number {
    this.countSeat += 1;
    this.leftPosSingle += this.side + this.margin;
    return this.leftPosSingle;
  }

  get left(): number {
    // this.countSeat += 1;
    // this.leftPosSingle += this.side + this.margin;
    return this.leftCalc();
  }

  leftDoubleCalc(): number {
    this.countSeat += 2;
    this.leftPosDouble += this.sideDouble + this.margin;
    return this.leftPosDouble;
  }

  get leftDouble(): number {
    // this.countSeat += 2;
    // this.leftPosDouble += this.sideDouble + this.margin;
    return this.leftDoubleCalc();
  }

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
    private cinemaSeatService: CinemaSeatService,
    private cinemaBookingService: CinemaBookingService,
  ) {}

  ngOnInit(): void {
    this.stateOfSeats = Array(this.seats.length).fill(false);
    for (let i of this.selectedSeatTypeQuantityArr) {
      this.bookingSeat += i.quantity;
    }
  }

  reset(): void {
    this.countSeat = 0;
    this.topPos = 3;
    this.leftPosSingle = this.leftPosInit;
    this.leftPosDouble = this.leftPosInit - this.side - this.margin;
  }

  select(index: number): void {
    for (let i = 0; i < this.selectedSeatTypeQuantityArr.length; i++) {
      if (
        this.selectedSeatTypeQuantityArr[i].seatType.name ==
        this.seats[index].type.name
      ) {
        if (this.selectedSeatTypeQuantityArr[i].quantity == 0) {
          alert(`You didn't select to book this seats`);
          break;
        }

        if (this.stateOfSeats[index]) {
          this.stateOfSeats[index] = !this.stateOfSeats[index];
          this.selectedSeatTypeQuantityArr[i].selected--;
          this.currentSeat--;
          break;
        }

        if (
          this.selectedSeatTypeQuantityArr[i].selected <
            this.selectedSeatTypeQuantityArr[i].quantity &&
          !this.stateOfSeats[index]
        ) {
          this.stateOfSeats[index] = !this.stateOfSeats[index];
          this.selectedSeatTypeQuantityArr[i].selected++;
          this.currentSeat++;
        } else {
          alert('Already choose all the ticket this type');
        }

        break;
      }
    }

    this.reset();
  }

  changeToggleCinemaSeat(): void {
    this.toggle.emit();
  }

  addBooking(): void {
    let tokenName: string | null = this.authService.getToken();
    let userId: number | undefined = this.accountService.getAccountByUsername(tokenName)?.userId;
    let user: User = this.userService.getById(userId);

    let booking: Booking = new Booking(user, this.cinema, this.movie, this.showtime, this.selectedDate, 0, 0, []);

    for (let i = 0; i < this.stateOfSeats.length; i++) {
      debugger
      if (this.stateOfSeats[i] == true) {
        let seat: Seat | any = this.cinemaSeatService.getSeatById(i + 1);
        let details: BookingDetails = new BookingDetails(booking.id, seat, seat.type.price)

        booking.quantity++;
        booking.total += seat.type.price;
        booking.bookingDetails.push(details);
      }
    }

    this.cinemaBookingService.add(booking);
  }

  confirmBooking(): void {
    for (let i = 0; i < this.selectedSeatTypeQuantityArr.length; i++) {
      if (
        this.selectedSeatTypeQuantityArr[i].quantity !=
        this.selectedSeatTypeQuantityArr[i].selected
      ) {
        this.reset();
        return;
      }
    }

    this.addBooking();
    this.toggleSeatSelector = !this.toggleSeatSelector;
    alert('Booking successfully');
  }
}

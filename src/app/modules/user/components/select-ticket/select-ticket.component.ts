import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cinema } from 'src/app/models/cinema.model';
import { Movie } from 'src/app/models/movie.model';
import { SeatType } from 'src/app/models/seat-type';
import { Seat } from 'src/app/models/seat.model';
import { Showtime } from 'src/app/models/showtime.model';
import { CinemaSeatService } from 'src/app/services/cinema-seat.service';

@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.component.html',
  styleUrls: ['./select-ticket.component.scss'],
})
export class SelectTicketComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  
  @Input() movie!: Movie;
  @Input() selectedDate!: Date;
  @Input() cinema!: Cinema;
  @Input() showtime!: Showtime;

  seats!: Seat[];
  toggleCinemaSeat: boolean = false;

  selectedSeatTypeQuantityArr: {
    seatType: SeatType;
    quantity: number;
    selected: number;
  }[] = [];
  ticketQuantity: number = 0;
  total: number = 0;

  constructor(private cinemaSeatService: CinemaSeatService) {}

  ngOnInit(): void {
    this.seats = this.cinemaSeatService.getSeatListForBooking(
      this.cinema.id,
      this.showtime.id
    );

    this.getDistinctSeatType();
  }

  isExisted(seatType: SeatType): boolean {
    for (let i = 0; i < this.selectedSeatTypeQuantityArr.length; i++) {
      if (this.selectedSeatTypeQuantityArr[i].seatType.id == seatType.id)
        return true;
    }

    return false;
  }

  getDistinctSeatType(): void {
    this.seats.forEach((s) => {
      if (this.isExisted(s.type) == false) {
        this.selectedSeatTypeQuantityArr.push({
          seatType: s.type,
          quantity: 0,
          selected: 0,
        });
      }
    });
  }

  decrease(index: number): void {
    if (this.selectedSeatTypeQuantityArr[index].quantity > 0) {
      this.selectedSeatTypeQuantityArr[index].quantity--;
      this.ticketQuantity--;
      this.total -= this.selectedSeatTypeQuantityArr[index].seatType.price;
    }
  }

  increase(index: number): void {
    if (this.ticketQuantity < 8) {
      this.selectedSeatTypeQuantityArr[index].quantity++;
      this.ticketQuantity++;
      this.total += this.selectedSeatTypeQuantityArr[index].seatType.price;
    } else {
      alert('Maximum is 8');
    }
  }

  toggleSelectTicket(): void {
    this.toggle.emit();
  }

  changeToggleCinemaSeat(): void {
    this.toggleCinemaSeat = !this.toggleCinemaSeat;
  }
}

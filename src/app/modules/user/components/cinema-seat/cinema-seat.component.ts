import { Component, Input, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/seat.model';
import { CinemaSeatService } from 'src/app/services/cinema-seat.service';

@Component({
  selector: 'app-cinema-seat',
  templateUrl: './cinema-seat.component.html',
  styleUrls: ['./cinema-seat.component.scss'],
})
export class CinemaSeatComponent implements OnInit {
  @Input() cinemaId!: number;
  @Input() showtimeId!: number;
  seats!: Seat[];

  countSeat: number = 0;
  breakPoint: number = 16;
  leftPosInit: number = 5.5;

  margin: number = 0.3;
  side: number = 2.2;
  sideDouble: number = this.side * 2 + this.margin;

  topPos: number = 3;
  leftPosSingle: number = this.leftPosInit;
  leftPosDouble: number = this.leftPosInit - this.side - this.margin;

  get top(): number {
    if (this.countSeat == this.breakPoint) {
      this.topPos += this.side + this.margin;
      this.leftPosSingle = this.leftPosInit;
      this.countSeat = 0;
    }
    return this.topPos;
  }

  get left(): number {
    this.countSeat += 1;
    this.leftPosSingle += this.side + this.margin;
    return this.leftPosSingle;
  }

  get leftDouble(): number {
    this.countSeat += 2;
    this.leftPosDouble += this.sideDouble + this.margin;
    return this.leftPosDouble;
  }

  constructor(private cinemaSeatService: CinemaSeatService) {}

  ngOnInit(): void {
    this.seats = this.cinemaSeatService.getSeatListForBooking(
      this.cinemaId,
      this.showtimeId
    );
  }
}

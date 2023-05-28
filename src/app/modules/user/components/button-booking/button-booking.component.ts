import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-button-booking',
  templateUrl: './button-booking.component.html',
  styleUrls: ['./button-booking.component.scss'],
})
export class ButtonBookingComponent {
  @Input() movie!: Movie;
  toggle!: boolean;

  toggleBooking() {
    this.toggle = !this.toggle;
  }
}

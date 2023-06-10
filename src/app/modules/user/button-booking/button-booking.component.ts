import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-booking',
  templateUrl: './button-booking.component.html',
  styleUrls: ['./button-booking.component.scss'],
})
export class ButtonBookingComponent {
  @Input() movie!: Movie;
  toggle!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  toggleBooking() {
    if (this.authService.isLoggedIn() == false) {
      this.router.navigate(['user/logIn']);
    }

    this.toggle = !this.toggle;
  }
}

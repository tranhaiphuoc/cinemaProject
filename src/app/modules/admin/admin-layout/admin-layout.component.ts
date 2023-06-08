import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string | null {
    return this.authService.getToken();
  }

  constructor(private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut();
  }
}

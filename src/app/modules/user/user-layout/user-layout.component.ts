import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string | null {
    return this.authService.getToken();
  }

  constructor(
    private authService: AuthService,
    private router: Router) { }

  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  notDeveloped(): void {
    localStorage.setItem('backUrl', this.router.url);
    this.router.navigate(['not-developed']);
  }
}

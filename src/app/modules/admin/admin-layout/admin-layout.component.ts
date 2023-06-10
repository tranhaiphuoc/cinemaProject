import { Component, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  open: boolean = false;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string | null {
    return this.authService.getToken();
  }

  constructor(private authService: AuthService, private renderer: Renderer2) {}

  logOut(): void {
    this.authService.logOut();
  }

  openDropDown($event: any): void {
    const ariaExpanded = $event.target.getAttribute('aria-expanded');

    if (ariaExpanded == 'true') this.renderer.addClass($event.target, 'open');
    else this.renderer.removeClass($event.target, 'open');
  }
}

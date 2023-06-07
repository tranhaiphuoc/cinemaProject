import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.getRole() == 'Admin' && authService.isLoggedIn()) return true;
  return false;
};

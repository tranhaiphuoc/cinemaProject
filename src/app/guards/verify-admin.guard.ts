import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const verifyAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.getRole() == 'Admin' && authService.isLoggedIn()) return true;
  return false;
};

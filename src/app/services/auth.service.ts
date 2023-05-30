import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { Observable, of, throwError } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private account: AccountService,
    private role: RoleService
  ) {}

  setToken(token: string | undefined): void {
    localStorage.setItem('token', token!);
  }

  setRole(role: string | undefined): void {
    localStorage.setItem('role', role!);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logIn({ username, password }: any): Observable<any> {
    const account = this.account.getAccount(username, password);

    if (account != undefined) {
      this.setToken(account.username);
      this.setRole(this.role.getById(account.id)?.name);
      return of({ username: account.username, password: account.password });
    }
    return throwError(() => new Error('Fail to log in'));
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}

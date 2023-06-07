import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountList: Account[] = [
    {
      id: 1,
      userId: 1,
      roleId: 1,
      username: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      userId: 2,
      roleId: 2,
      username: 'user',
      password: 'user',
    },
  ];
  count: number = this.accountList.length;

  constructor() {}

  getList(): Account[] | any {
    return this.accountList;
  }

  getById(id: number): Account | any {
    return this.accountList.find((a) => {
      return a.id == id;
    });
  }

  getAccount(username: string, password: string): Account | undefined {
    return this.accountList.find((acc) => {
      return acc.username === username && acc.password === password;
    });
  }

  getAccountByUsername(username: string | null): Account | undefined {
    if (username == null) return;
    
    return this.accountList.find((acc) => {
      return acc.username == username;
    });
  }

  add(account: Account): void {
    if (account == undefined || account == null) return;

    account.id = ++this.count;

    this.accountList.push(account);
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList: User[] = [
    {
      id: 1,
      fullname: 'Someone',
      phoneNumber: '0000000000',
      email: 'admin@gmail.com',
      dob: new Date(2000, 1, 1),
    },
    {
      id: 2,
      fullname: 'Someone',
      phoneNumber: '0000000001',
      email: 'user@gmail.com',
      dob: new Date(2000, 2, 2),
    },
  ];
  count: number = this.userList.length;

  constructor() {}

  getList(): User[] | any {
    return this.userList;
  }

  getById(id: number): User | any {
    return this.userList.find((u) => {
      return u.id == id;
    });
  }

  add(user: User): void {
    if (user == undefined || user == null) return;

    user.id = ++this.count;

    this.userList.push(user);
  }
}

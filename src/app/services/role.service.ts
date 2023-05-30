import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roleList: Role[] = [
    {
      id: 1,
      name: 'Admin',
    },
    {
      id: 2,
      name: 'User',
    },
  ];

  constructor() {}

  getById(id: number): Role | undefined {
    return this.roleList.find((r) => {
      return r.id == id;
    });
  }
}

export class Account implements IAccount {
  id!: number;
  userId!: number;
  roleId!: number;
  username!: string;
  password!: string;
}

export interface IAccount {
  id: number;
  userId: number;
  roleId: number;
  username: string;
  password: string;
}

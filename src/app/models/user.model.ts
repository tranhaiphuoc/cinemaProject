export class User implements IUser {
  id!: number;
  fullname!: string;
  phoneNumber!: string;
  email!: string;
  dob!: Date
}

export interface IUser {
  id: number;
  fullname: string;
  phoneNumber: string;
  email: string;
  dob: Date
}

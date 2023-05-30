export class Role implements IRole {
  id!: number;
  name!: string;
}

interface IRole {
  id: number;
  name: string;
}

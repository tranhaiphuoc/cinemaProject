export class Genre implements IGenre {
  id!: number;
  name!: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export interface IGenre {
  id: number;
  name: string;
}

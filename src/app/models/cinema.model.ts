export class Cinema implements ICinema {
  id!: number;
  name!: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export interface ICinema {
  id: number;
  name: string;
}

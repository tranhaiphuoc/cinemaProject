export class Genre implements IGenre {
    id!: number
    name!: string
}

export interface IGenre {
    id: number
    name: string
}

export class Cinema implements ICinema {
    id!: number
    name!: string
}

export interface ICinema {
    id: number
    name: string
}
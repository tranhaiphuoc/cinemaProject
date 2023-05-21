import { Cinema } from "./cinema.model"

export class CinemaCenter implements ICinemaCenter {
    id!: number
    name!: string
    cinema!: Cinema[]
}

export interface ICinemaCenter {
    id: number
    name: string
    cinema: Cinema[]
}
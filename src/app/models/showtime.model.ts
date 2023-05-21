import { Time } from "@angular/common"

export class Showtime implements IShowtime {
    id!: number
    time!: Time
}

export interface IShowtime {
    id: number
    time: Time
}
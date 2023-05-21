import { Movie } from "./movie.model"
import { Showtime } from "./showtime.model"

export class Schedule implements ISchedule {
    id!: number
    movie!: Movie
    date!: Date
    time!: Showtime[]
}

export interface ISchedule {
    id: number
    movie: Movie
    date: Date
    time: Showtime[]
}
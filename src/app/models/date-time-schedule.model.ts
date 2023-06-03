import { Showtime } from "./showtime.model"

export class DateTimeSchedule {
    id!: number
    date!: Date
    time: Showtime[] = []
}

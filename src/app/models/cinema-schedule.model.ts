import { Cinema } from "./cinema.model"
import { Schedule } from "./schedule.model"

export class CinemaSchedule implements ICinemaSchedule {
    id!: number
    cinema!: Cinema
    schedule!: Schedule
}

export interface ICinemaSchedule {
    id: number
    cinema: Cinema
    schedule: Schedule
}
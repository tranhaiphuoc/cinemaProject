import { Cinema } from "../models/cinema.model";
import { Schedule } from "../models/schedule.model";

export class CinemaScheduleDto {
    cinema!: Cinema
    schedule!: Schedule[]
}

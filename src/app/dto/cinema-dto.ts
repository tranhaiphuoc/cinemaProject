import { CinemaCenter } from "../models/cinema-center.model";
import { CinemaScheduleDto } from "./cinema-schedule-dto"

export class CinemaDto {
    id!: number;
    cinemaCenter!: CinemaCenter
    cinemaSchedule: CinemaScheduleDto[] = []
}

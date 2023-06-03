import { CinemaScheduleDto } from "./cinema-schedule-dto"

export class CinemaDto {
    cinemaCenter!: string
    cinemaSchedule: CinemaScheduleDto[] = []
}

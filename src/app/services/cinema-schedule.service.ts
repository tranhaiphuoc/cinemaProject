import { Injectable } from '@angular/core';
import { CinemaDto } from '../dto/cinema-dto';
import { Cinema } from '../models/cinema.model';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { CinemaScheduleDto } from '../dto/cinema-schedule-dto';
import { Schedule } from '../models/schedule.model';
import { DateTimeSchedule } from '../models/date-time-schedule.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaScheduleService {
  private tempDate: Date = new Date();
  private movieList: Movie[] = this.movieService.getList();
  private cinemaScheduleList: CinemaDto[] = [
    {
      cinemaCenter: 'CGV Hùng Vương Plaza',
      cinemaSchedule: [
        {
          cinema: new Cinema(1, '2D Cinema'),
          schedule: [
            {
              id: 1,
              movie: this.movieList[0],
              dateTime: [
                {
                  id: 1,
                  date: this.tempDate,
                  time: [
                    {
                      id: 1,
                      scheduleId: 1,
                      hour: 21,
                      minute: 50,
                    },
                    {
                      id: 2,
                      scheduleId: 1,
                      hour: 22,
                      minute: 15,
                    },
                    {
                      id: 3,
                      scheduleId: 1,
                      hour: 23,
                      minute: 10,
                    },
                  ],
                },
                {
                  id: 2,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 4,
                      scheduleId: 1,
                      hour: 8,
                      minute: 0,
                    },
                    {
                      id: 5,
                      scheduleId: 1,
                      hour: 9,
                      minute: 0,
                    },
                    {
                      id: 6,
                      scheduleId: 1,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              movie: this.movieList[1],
              dateTime: [
                {
                  id: 3,
                  date: this.tempDate,
                  time: [
                    {
                      id: 7,
                      scheduleId: 2,
                      hour: 23,
                      minute: 15,
                    },
                  ],
                },
                {
                  id: 4,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 8,
                      scheduleId: 2,
                      hour: 8,
                      minute: 45,
                    },
                    {
                      id: 9,
                      scheduleId: 2,
                      hour: 12,
                      minute: 30,
                    },
                    {
                      id: 10,
                      scheduleId: 2,
                      hour: 15,
                      minute: 10,
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              movie: this.movieList[2],
              dateTime: [
                {
                  id: 5,
                  date: this.tempDate,
                  time: [
                    {
                      id: 11,
                      scheduleId: 3,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 6,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 12,
                      scheduleId: 3,
                      hour: 9,
                      minute: 30,
                    },
                    {
                      id: 13,
                      scheduleId: 3,
                      hour: 11,
                      minute: 25,
                    },
                    {
                      id: 14,
                      scheduleId: 3,
                      hour: 14,
                      minute: 20,
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              movie: this.movieList[3],
              dateTime: [
                {
                  id: 7,
                  date: this.tempDate,
                  time: [
                    {
                      id: 15,
                      scheduleId: 4,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 8,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 16,
                      scheduleId: 4,
                      hour: 9,
                      minute: 30,
                    },
                    {
                      id: 17,
                      scheduleId: 4,
                      hour: 12,
                      minute: 20,
                    },
                    {
                      id: 18,
                      scheduleId: 4,
                      hour: 13,
                      minute: 40,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      cinemaCenter: 'CGV Thảo Điền Pearl',
      cinemaSchedule: [
        {
          cinema: new Cinema(2, '2D Cinema'),
          schedule: [
            {
              id: 5,
              movie: this.movieList[4],
              dateTime: [
                {
                  id: 9,
                  date: this.tempDate,
                  time: [
                    {
                      id: 19,
                      scheduleId: 5,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 10,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 20,
                      scheduleId: 5,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: 6,
              movie: this.movieList[5],
              dateTime: [
                {
                  id: 11,
                  date: this.tempDate,
                  time: [
                    {
                      id: 21,
                      scheduleId: 6,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 12,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 22,
                      scheduleId: 6,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: 7,
              movie: this.movieList[6],
              dateTime: [
                {
                  id: 13,
                  date: this.tempDate,
                  time: [
                    {
                      id: 23,
                      scheduleId: 7,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 14,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 24,
                      scheduleId: 7,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: 8,
              movie: this.movieList[7],
              dateTime: [
                {
                  id: 15,
                  date: this.tempDate,
                  time: [
                    {
                      id: 25,
                      scheduleId: 8,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: 16,
                  date: new Date(new Date().setDate(this.tempDate.getDate() + 1)),
                  time: [
                    {
                      id: 26,
                      scheduleId: 8,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor(private movieService: MovieService) {}

  getList(): CinemaDto[] {
    return this.cinemaScheduleList;
  }

  getAvailableSchedule(movie: Movie, date: Date): CinemaDto[] {
    let tempCinemaDto: CinemaDto[] = [];
    let tempCinemaScheduleDto: CinemaScheduleDto[] = [];

    for (let cinema of this.cinemaScheduleList) {
      cinema.cinemaSchedule.forEach((cs) => {
        let csDto: CinemaScheduleDto | undefined = undefined;

        for (let s of cs.schedule) {
          if (movie.id == s.movie.id) {
            let dateTime: DateTimeSchedule | undefined = undefined;

            for (let d of s.dateTime) {
              if (date.toDateString() == d.date.toDateString()) {
                dateTime = {
                  id: d.id,
                  date: d.date,
                  time: d.time,
                };

                break;
              }
            }

            if (dateTime != undefined) {
              let scheduleArr: Schedule[] = [
                {
                  id: s.id,
                  movie: s.movie,
                  dateTime: [dateTime],
                },
              ];

              csDto = {
                cinema: cs.cinema,
                schedule: scheduleArr,
              };

              break;
            }
          }
        }

        if (csDto != undefined) {
          tempCinemaScheduleDto.push(csDto);

          let cDto: CinemaDto = {
            cinemaCenter: cinema.cinemaCenter,
            cinemaSchedule: tempCinemaScheduleDto,
          };

          tempCinemaDto.push(cDto);
        }
      });
    }

    return tempCinemaDto;
  }
}

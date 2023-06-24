import { Injectable } from '@angular/core';
import { CinemaDto } from '../dto/cinema-dto';
import { Cinema } from '../models/cinema.model';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { CinemaScheduleDto } from '../dto/cinema-schedule-dto';
import { Schedule } from '../models/schedule.model';
import { DateTimeSchedule } from '../models/date-time-schedule.model';
import { CinemaCenterService } from './cinema-center.service';
import { CinemaCenter } from '../models/cinema-center.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaScheduleService {
  private tempDate: Date = new Date();
  private cinemaCenterList: CinemaCenter[] = this.cinamaCenterService.getList();
  private movieList: Movie[] = this.movieService.getList();

  private countCinemaDto = 1;
  private countSchedule = 1;
  private countDatetime = 1;
  private countShowtime = 1;


  private cinemaScheduleList: CinemaDto[] = [
    {
      id: this.countCinemaDto++,
      cinemaCenter: this.cinemaCenterList[0],
      cinemaSchedule: [
        {
          cinema: this.cinemaCenterList[0].cinema[0],
          schedule: [
            {
              id: this.countSchedule++,
              movie: this.movieList[0],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 21,
                      minute: 50,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 15,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 23,
                      minute: 10,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 8,
                      minute: 0,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 0,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[1],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 23,
                      minute: 15,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 8,
                      minute: 45,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 12,
                      minute: 30,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 15,
                      minute: 10,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[2],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 11,
                      minute: 25,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 14,
                      minute: 20,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[3],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 12,
                      minute: 20,
                    },
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
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
      id: this.countCinemaDto++,
      cinemaCenter: this.cinemaCenterList[1],
      cinemaSchedule: [
        {
          cinema: this.cinemaCenterList[1].cinema[0],
          schedule: [
            {
              id: this.countSchedule++,
              movie: this.movieList[4],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[5],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[6],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 9,
                      minute: 30,
                    },
                  ],
                },
              ],
            },
            {
              id: this.countSchedule++,
              movie: this.movieList[7],
              dateTime: [
                {
                  id: this.countDatetime++,
                  date: this.tempDate,
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
                      hour: 22,
                      minute: 45,
                    },
                  ],
                },
                {
                  id: this.countDatetime++,
                  date: new Date(
                    new Date().setDate(this.tempDate.getDate() + 1)
                  ),
                  time: [
                    {
                      id: this.countShowtime++,
                      scheduleId: this.countSchedule - 1,
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

  constructor(
    private movieService: MovieService,
    private cinamaCenterService: CinemaCenterService
  ) {}

  private setId() {
    this.countCinemaDto = 1;
    this.countDatetime = 1;
    this.countSchedule = 1;
    this.countShowtime = 1;

    let count1 = 1;
    let count2 = 1;
    this.cinemaScheduleList.forEach(cinemaDTO => {
      cinemaDTO.cinemaCenter.id = count1++;
      cinemaDTO.cinemaCenter.cinema.forEach(cinema => {
        cinema.id = count2++;
      });
    });

    for (const cinema of this.cinemaScheduleList) {
      cinema.id = this.countCinemaDto++;
      for (const cinemaSchedule of cinema.cinemaSchedule) {
        for (const schedule of cinemaSchedule.schedule) {
          schedule.id = this.countSchedule++;
    
          for (const dateTime of schedule.dateTime) {
            dateTime.id = this.countDatetime++;
    
            for (const time of dateTime.time) {
              time.id = this.countShowtime++;
              time.scheduleId = this.countSchedule - 1;
            }
          }
        }
      }
    }
  }

  getList(): CinemaDto[] {
    this.setId();
    return this.cinemaScheduleList;
  }

  getAvailableSchedule(movie: Movie, date: Date): CinemaDto[] {
    let tempCinemaDto: CinemaDto[] = [];
    
    for (let cinema of this.cinemaScheduleList) {
      let tempCinemaScheduleDto: CinemaScheduleDto[] = [];

      for (let cs of cinema.cinemaSchedule) {
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
              let scheduleArr: Schedule[] = [];
              
              scheduleArr.push({
                id: s.id,
                movie: s.movie,
                dateTime: [dateTime],
              })

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
            id: cinema.id,
            cinemaCenter: cinema.cinemaCenter,
            cinemaSchedule: tempCinemaScheduleDto,
          };

          tempCinemaDto.push(cDto);
        }
      }
    }

    return tempCinemaDto;
  }
}

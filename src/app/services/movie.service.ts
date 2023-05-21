import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieList: Movie[] = [
    {
      id: 1,
      name: 'FAST AND FURIOUS X',
      rating: 'T16',
      releaseDate: new Date(2023, 5 ,19),
      runtime: 141,
      genre: [new Genre(1, 'Action'), new Genre(2, 'Crime')],
      anecdote: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes',
      status: 1
    },
    {
      id: 2,
      name: 'LẬT MẶT 6: TẤM VÉ ĐỊNH MỆNH',
      rating: 'T16',
      releaseDate: new Date(2023, 4 ,28),
      runtime: 132,
      genre: [new Genre(1, 'Action'), new Genre(2, 'Comedy'), new Genre(3, 'Drama'), new Genre(4, 'Thriller')],
      anecdote: 'Lật mặt 6 sẽ thuộc thể loại giật gân, tâm lý pha hành động, hài hước.',
      status: 1
    },
    {
      id: 3,
      name: "DORAEMON THE MOVIE: NOBITA'S SKY UTOPIA 2023",
      rating: 'P',
      releaseDate: new Date(2023, 5 ,26),
      runtime: 108,
      genre: [new Genre(5, 'Animation')],
      anecdote: "Doraemon The Movie: Nobita's Sky Utopia 2023 is about when Nobita finds a crescent-shaped island in the sky. In that place, everything is completely perfect… even the sleeping boy Nobita can also become a math prodigy, a sports superstar. The entire Doraemon's team utilize the unique treasure that has never been seen before to arrive this wonderful kingdom. Together with new friends here, especially the robot cat Sonya, Doraemon & Nobita and their friends have a wonderful journey to the brand new cloud kingdom… until the secrets behind this ideal land are being revealed.",
      status: 1
    },
    {
      id: 4,
      name: 'GUARDIANS OF THE GALAXY VOL. 3',
      rating: 'T13',
      releaseDate: new Date(2023, 5 ,3),
      runtime: 149,
      genre: [new Genre(1, 'Action'), new Genre(6, 'Adventure'), new Genre(7, 'Fantasy')],
      anecdote: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
      status: 1
    },
    {
      id: 5,
      name: 'HYPNOTIC',
      rating: 'T18',
      releaseDate: new Date(2023, 5 ,12),
      runtime: 93,
      genre: [new Genre(1, 'Action'), new Genre(4, 'Thriller'), new Genre(8, 'Mystery')],
      anecdote: 'Determined to find his missing daughter, detective Danny Rourke instead finds himself spiraling down a rabbit hole while investigating a series of reality-bending bank robberies where he will ultimately call into question his most basic assumptions about everything and everyone in his world. Aided by Diana Cruz, a gifted psychic, Rourke simultaneously pursues and is pursued by a lethal specter - the one man he believes holds the key to finding the missing girl - only to discover more than he ever bargained for.',
      status: 1
    },
    {
      id: 6,
      name: 'SISU',
      rating: 'T18',
      releaseDate: new Date(2023, 5 ,12),
      runtime: 90,
      genre: [new Genre(1, 'Action')],
      anecdote: 'Set in 1944, SISU tells the story of an ex-soldier, who discovers gold in the deep wilderness of Finland. On his way into the city, brutal Nazis on a scorched-earth mission discovers his treasure trove. The relentless soldier must go through outrageous lengths to get his loot home, even if it means killing every last Nazi.',
      status: 1
    },
    {
      id: 7,
      name: 'THE BLACK DEMON',
      rating: 'T16',
      releaseDate: new Date(2023, 5 ,12),
      runtime: 149,
      genre: [new Genre(1, 'Action'), new Genre(4, 'Thriller')],
      anecdote: 'Stranded on a crumbling rig in Baja, a family faces off against a vengeful megalodon shark.',
      status: 1
    },
    {
      id: 8,
      name: 'THE ACCURSED',
      rating: 'T18',
      releaseDate: new Date(2023, 5 ,12),
      runtime: 95,
      genre: [new Genre(9, 'Horror'), new Genre(8, 'Mystery'), new Genre(4, 'Thriller')],
      anecdote: 'Elly is asked by a family friend to look after an elderly woman living in a remote cabin for a few days. She agrees, but soon discovers there is a demon hiding in the woman just waiting to break free.',
      status: 1
    },
  ];

  constructor() { }
}

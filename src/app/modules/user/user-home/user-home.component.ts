import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  title = 'cinemaProject';
  movieList!: Movie[];

  constructor(
    private readonly _movieService: MovieService
  ) { };

  ngOnInit(): void {
    this.movieList = this._movieService.getList();
  }
}

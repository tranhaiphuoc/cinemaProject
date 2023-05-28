import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cinemaProject';

  constructor(private movieService: MovieService) { }

  getMovie(num: number): Movie {
    return this.movieService.getList()[num];
  }

  getListMovie(): Movie[] {
    return this.movieService.getList();
  }
}

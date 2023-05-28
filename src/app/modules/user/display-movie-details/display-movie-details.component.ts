import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-display-movie-details',
  templateUrl: './display-movie-details.component.html',
  styleUrls: ['./display-movie-details.component.scss']
})
export class DisplayMovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movie = this.movieService.getById(params['id']);
    });
  }
  
  getRating() : string {
    if(this.movie?.rating === "T16" || this.movie?.rating === "T13" || this.movie?.rating === "T18")
      return " - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ " + this.movie.rating.substring(1) +  " TUỔI TRỞ LÊN (" + this.movie.rating.substring(1) + "+)";
    else
      return "- PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI";
  }

  getListGenre() : string {
    return this.movie.genre.map(genre => genre.name).join(", ");
  }
}
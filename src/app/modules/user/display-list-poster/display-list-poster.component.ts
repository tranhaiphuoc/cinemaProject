import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-display-list-poster',
  templateUrl: './display-list-poster.component.html',
  styleUrls: ['./display-list-poster.component.scss']
})
export class DisplayListPosterComponent implements OnInit {
  filter!: string;
  lstMovie!: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.lstMovie = this.movieService.getList();
    this.filter = 'Tất cả phim';
  }
}

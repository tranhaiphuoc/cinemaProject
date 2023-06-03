import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(
    private readonly _movieService: MovieService,
    private readonly _routerService: Router
  ) { };

  dataList!: Movie[];
  fieldList!: string[];

  ngOnInit(): void {
    this.dataList = this._movieService.getList();
    this.fieldList = ['id', 'name', 'rating', 'releaseDate', 'runtime',
      'genre'];
  }

  updateItem(item: Movie | undefined) {
    debugger
    if (item == undefined)
      return;
    // navigate
    this._routerService.navigate(['/admin/movie/update', item.id]);
  }

  deleteItem(item: Movie | undefined) {
    if (item == undefined)
      return;
    this._movieService.deleteItem(item);
  }

  seeDetails(id: number | undefined) {
    if (id == undefined)
      return;
    this._routerService.navigate(['\movie', id]);
  }

  getListGenre(item: Movie): string {
    return this._movieService.getListGenre(item);
  }
}

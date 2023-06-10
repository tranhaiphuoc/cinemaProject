import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly _routerService: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) { };

  currentRoute = { relativeTo: this._activatedRoute };
  dataList!: Movie[];
  fieldList!: string[];
  movieName!: string;
  fillList!: Movie[];

  addIconImg = 'assets/Images/others/add-icon.png';
  searchIconImg = 'assets/Images/others/search-icon.png';

  ngOnInit(): void {
    this.dataList = this._movieService.getList();
    this.fieldList = ['no.', 'name', 'rating', 'releaseDate', 'runtime',
      'genre'];

    this.movieName = '';
    this.fillList = this.fillDataListByName();
  }

  fillDataListByName(): Movie[] {
    return this.dataList.filter(item => item.name.indexOf(this.movieName) != -1);
  }

  addItem() {
    debugger
    this._routerService.navigate(['add'], this.currentRoute);
  }

  updateItem(item: Movie | undefined) {
    if (item == undefined)
      return;
    this._routerService.navigate(['update', item.id], this.currentRoute);
  }

  seeDetails(id: number | undefined) {
    if (id == undefined)
      return;
    this._routerService.navigate(['\movie', id]);
  }

  deleteItem(item: Movie | undefined) {
    debugger
    if (item == undefined)
      return;
    this._movieService.deleteItem(item);
  }

  getListGenre(item: Movie): string {
    return this._movieService.getListGenre(item);
  }
}

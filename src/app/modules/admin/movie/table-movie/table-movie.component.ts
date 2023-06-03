import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-table-movie',
  templateUrl: './table-movie.component.html',
  styleUrls: ['./table-movie.component.scss']
})
export class TableMovieComponent {
  @Output('deleteItem') deleteItem = new EventEmitter<any>();
  @Output('updateItem') updateItem = new EventEmitter<any>();
  @Output('seeDetails') seeDetails = new EventEmitter<number>();

  @Input('dataList') dataList!: any[];
  @Input('fieldList') fieldList!: string[];

  constructor(
    private readonly _movieService: MovieService,
  ) { };

  editIconImg = 'assets/Images/others/edit-icon.png';
  seeDetailsIconImg = 'assets/Images/others/see-details-icon.png';

  DeleteItem(item: any) {
    this.deleteItem.emit(item);
  }

  UpdateItem(item: any) {
    this.updateItem.emit(item);
  }

  SeeDetails(id: number) {
    this.seeDetails.emit(id);
  }

  getListGenre(item: Movie): string {
    return this._movieService.getListGenre(item);
  }

  isCheckGenre(field: string) {
    return field == 'genre';
  }

  isCheckDate(field: string) {
    return field == 'releaseDate';
  }

  isCheckElse(field: string) {
    return !this.isCheckGenre(field) && !this.isCheckDate(field);
  }
}

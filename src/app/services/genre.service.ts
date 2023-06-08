import { Injectable } from '@angular/core';
import { Genre } from '../models/genre.model';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private _genreList: Genre[] = [
    { id: 1, name: 'Hành động' },
    { id: 2, name: 'Tội phạm' },
    { id: 3, name: 'Hài' },
    { id: 3, name: 'Tâm Lý' },
    { id: 4, name: 'Hồi hộp' },
    { id: 5, name: 'Hoạt hình' },
    { id: 6, name: 'Phiêu lưu' },
    { id: 7, name: 'Thần thoại' },
    { id: 8, name: 'Bí ẩn' },
    { id: 9, name: 'Kinh dị' }
  ]


  constructor() { }

  getList(): Genre[] {
    return this._genreList;
  }

  getById(id: number): Genre | any {
    return this._genreList.find((m) => {
      return m.id == id;
    });
  }

  getListName(genres: Genre[]): string {
    return genres.map(genre => genre.name).join(", ");
  }

  getArrayName(genres: Genre[]): string[] {
    const data = this.getListName(genres);
    return data.split(', ');
  }

  deleteItem(input: Genre) {
    if (input == null)
      return;
    const index = _.findIndex(this._genreList, (item: Genre) => {
      return item.id == input.id;
    });
    if (index == -1)
      return;
    this._genreList.splice(index, 1);
  }

  updateItem(newInput: Genre) {
    debugger
    if (newInput == null)
      return;
    const index = _.findIndex(this._genreList, (item: Genre) => {
      return item.id == newInput.id;
    });
    if (index == -1)
      return;
    this._genreList[index] = newInput;
  }
}

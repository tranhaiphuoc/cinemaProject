import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private _genreList: string[] = [
    'T16', 'P', 'T13', 'T18'
  ]
  constructor() { }

  getList(): string[] {
    return this._genreList;
  }
}

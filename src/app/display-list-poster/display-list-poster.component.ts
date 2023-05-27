import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-display-list-poster',
  templateUrl: './display-list-poster.component.html',
  styleUrls: ['./display-list-poster.component.scss']
})
export class DisplayListPosterComponent {
  @Input('lstMovie') lstMovie!: Movie[];
  @Input('filter') filter!: string;

  indexLst = -1;
  getListGenre(movie: Movie): string {
    let content: string = "";
    movie.genre.forEach(element => {
      content = content.concat(', ', element.name);
    });
    return content.substring(1);
  }

  getDisplay(): string {
    return this.indexLst ? 'display: flex;' : '';
  }
}

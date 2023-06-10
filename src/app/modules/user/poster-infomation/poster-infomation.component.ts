import { Component, Input } from '@angular/core';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-poster-infomation',
  templateUrl: './poster-infomation.component.html',
  styleUrls: ['./poster-infomation.component.scss']
})
export class PosterInfomationComponent {
  @Input() movie!: Movie;

  get getListGenre(): string {
    return this.listGenre(this.movie);
  }

  listGenre(movie: Movie): string {
    let content: string = "";
    movie.genre.forEach(element => {
      content = content.concat(', ', element.name);
    });
    return content.substring(1);
  }
}

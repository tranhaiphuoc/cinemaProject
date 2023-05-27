import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-display-movie-details',
  templateUrl: './display-movie-details.component.html',
  styleUrls: ['./display-movie-details.component.scss']
})
export class DisplayMovieDetailsComponent {
  @Input() movie!: Movie;
  
  getRating() : string {
    if(this.movie.rating === "T16" || this.movie.rating === "T13" || this.movie.rating === "T18")
      return " - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ " + this.movie.rating.substring(1) +  " TUỔI TRỞ LÊN (" + this.movie.rating.substring(1) + "+)";
    else
      return "- PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI";
  }

  getListGenre() : string {
    let content: string = "";
    this.movie.genre.forEach(element => {
      content = content.concat(', ', element.name);
    });
    return content.substring(1);
  }
}

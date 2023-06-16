import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {
  @Input() movie!: Movie;

  isHover!: boolean;
  ageOutput!: string;

  othersImgUrl2 = '../../assets/Images/others/';
  arrowRight = this.othersImgUrl2 + 'arrow-right.png';
  landlineIcon = this.othersImgUrl2 + 'landline-icon.png';
}

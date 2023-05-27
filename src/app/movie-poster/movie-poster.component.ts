import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  // Get data from parent component
  movieName = 'Fast and furious X';
  movieFileName = 'fast-and-furious.jpg';
  rated = 'T16';

  isHover!: boolean;
  ageOutput!: string;

  ngOnInit(): void { }

  moviePosterImgUrl = '../../assets/Images/movie-poster/';
  othersImgUrl2 = '../../assets/Images/others/';

  arrowRight = this.othersImgUrl2 + 'arrow-right.png';
  landlineIcon = this.othersImgUrl2 + 'landline-icon.png';

  moviePath = this.moviePosterImgUrl + this.movieFileName;
}

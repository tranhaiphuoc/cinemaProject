import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  // Get data
  movieName = 'Fast and furious X';
  movieFileName = 'fast-and-furious.jpg';
  age = 16;

  isHover!: boolean;
  ageOutput!: string;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.ageOutput = this.getAgeOutput();
  }

  baseImgUrl = this.document.baseURI + 'assets/Images/movie-poster/';
  baseImgUrl2 = this.document.baseURI + 'assets/Images/others/';

  arrowRight = this.baseImgUrl2 + 'arrow-right.png';
  landlineIcon = this.baseImgUrl2 + 'landline-icon.png';

  moviePath = this.baseImgUrl + this.movieFileName;

  getAgeOutput(): string {
    if (this.age > 0) {
      return "T" + this.age.toString();
    }
    else {
      return "P";
    }
  }
}

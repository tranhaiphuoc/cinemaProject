import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  baseImgUrl = this.document.baseURI + 'assets/Images/movie-poster/';
  baseImgUrl2 = this.document.baseURI + 'assets/Images/others/';

  fastAndFuriousX = this.baseImgUrl + 'fast-and-furious.jpg';

  arrowRight = this.baseImgUrl2 + 'arrow-right.png';
  landlineIcon = this.baseImgUrl2 + 'landline-icon.png';

  isHover!: boolean;

  movieName = 'Fast and furious X';
}

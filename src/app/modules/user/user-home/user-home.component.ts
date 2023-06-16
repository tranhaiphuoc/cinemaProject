import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  title = 'cinemaProject';
  movieList!: Movie[];

  constructor(
    private readonly _movieService: MovieService
  ) { };

  ngOnInit(): void {
    this.movieList = this._movieService.getList();

    let items: NodeListOf<Element> = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el: Element) => {
      const minPerSlide: number = 4
      let next: Element | null = el.nextElementSibling
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild: Node = next.cloneNode(true)
        el.appendChild(cloneChild.childNodes[0])
        next = next.nextElementSibling
      }
    })
  }
}

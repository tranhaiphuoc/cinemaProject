import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {
  form!: FormGroup;
  item!: Movie;
  rateList!: string[];

  backUrl = '/admin/movie';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _movieService: MovieService,
    private readonly _ratingService: RatingService,
    private readonly _routerService: Router
  ) { };

  ngOnInit(): void {
    this.resetValues();
    this.rateList = this.getListRate();
  }

  get fc() {
    return this.form.controls;
  }

  buildForm(item: Movie) {
    this.form = new FormGroup({
      id: new FormControl(item.id),
      name: new FormControl(item.name, [Validators.required]),
      rating: new FormControl(item.rating),
      releaseDate: new FormControl(item.releaseDate),
      runtime: new FormControl(item.runtime),
      genre: new FormControl(this._movieService.getListGenre(item))
    });
  }

  updateItem() {
    if (this.form.invalid)
      return;
    this._movieService.updateItem(this.form.value);
    this._routerService.navigate([this.backUrl]);
  }

  resetValues() {
    this._activatedRoute.params.subscribe(params => {
      const data = this._movieService.getById(params['id']);
      if (data == undefined)
        return;
      this.item = data;
      this.buildForm(data);
    });
  }

  getListRate(): string[] {
    return this._ratingService.getList();
  }
}

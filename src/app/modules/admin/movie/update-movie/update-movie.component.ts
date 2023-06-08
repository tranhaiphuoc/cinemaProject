import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';
import { Movie } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
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

  backUrl = '/admin/movie';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _movieService: MovieService,
    private readonly _ratingService: RatingService,
    private readonly _genreService: GenreService,
    private readonly _routerService: Router
  ) { };

  ngOnInit(): void {
    this.resetValues();
  }

  get genreList() {
    return this._genreService.getList();
  }

  get rateList() {
    return this._ratingService.getList();
  }

  get genresForm() {
    return this.fc['genresForm'] as FormArray;
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
      genre: new FormControl(item.genre),
      anecdote: new FormControl(item.anecdote),
      status: new FormControl(item.status),
      urlImage: new FormControl(item.urlImage),
      urlTrailer: new FormControl(item.urlTrailer),

      genresForm: new FormArray([])
    });
    this.addCheckBoxToForm();
    this.setGenreCheckBox();
  }

  private setGenreCheckBox() {
    this.genreList.forEach((element1, index) => {
      this.item.genre.forEach((element2) => {
        if (element1.name == element2.name) {
          const data = new FormControl(true);
          this.genresForm.setControl(index, data);
        }
      })
    });
  }

  private getGenreCheckBox() {
    const selectedGenres = this.genresForm.value
      .map((checked: any, i: number) => checked ? this.genreList[i] : null)
      .filter((v: null) => v !== null);

    this.fc['genre'].setValue(selectedGenres);
  }

  private addCheckBoxToForm() {
    this.genreList.forEach(() => {
      const data = new FormControl(false);
      this.genresForm.push(data);
    })
  }

  updateItem() {
    if (this.form.invalid)
      return;
    const data = this.getGenreCheckBox();
    this.form.removeControl('genresForm');
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
}

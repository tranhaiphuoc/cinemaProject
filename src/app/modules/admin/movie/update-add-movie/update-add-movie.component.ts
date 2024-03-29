import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-update-add-movie',
  templateUrl: './update-add-movie.component.html',
  styleUrls: ['./update-add-movie.component.scss']
})
export class UpdateAddMovieComponent implements OnInit {
  form!: FormGroup;
  item!: Movie;
  feature!: string;

  backUrl = '/admin/movie';
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _movieService: MovieService,
    private readonly _ratingService: RatingService,
    private readonly _genreService: GenreService,
    private readonly _routerService: Router,
    private readonly _toastrService: ToastrService
  ) { };

  ngOnInit(): void {
    debugger
    this.feature = { relativeTo: this._activatedRoute }.relativeTo.toString();

    if (this.feature.includes('update')) {
      this._activatedRoute.params.subscribe(params => {
        const data = this._movieService.getById(params['id']);
        if (data == undefined)
          return;
        this.item = data;

      });
    }
    else {
      this.item = {
        id: this._movieService.getList().length + 1,
        name: '',
        rating: '',
        releaseDate: new Date(1900, 1, 1),
        runtime: 0,
        genre: [],
        anecdote: '',
        status: 1,
        urlImage: '',
        urlTrailer: '',
      }
    }
    this.buildForm(this.item);
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
    this.getGenreCheckBox();
    this.form.removeControl('genresForm');
    this._movieService.updateItem(this.form.value);
    this._toastrService.success('Updated successfully!');
    this._routerService.navigate([this.backUrl]);
  }
  addItem() {
    if (this.form.invalid)
      return;
    this.getGenreCheckBox();
    this.form.removeControl('genresForm');
    this._movieService.addItem(this.form.value);
    this._toastrService.success('Added successfully!');
    this._routerService.navigate([this.backUrl]);
  }
}
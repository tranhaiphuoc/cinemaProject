import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { DisplayMovieDetailsComponent } from './display-movie-details/display-movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviePosterComponent,
    DisplayMovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

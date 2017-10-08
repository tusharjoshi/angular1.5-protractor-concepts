import { NgModule } from 'ng-metadata/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieRatingComponent } from './movies/movie-rating.component';

@NgModule( {
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieRatingComponent
  ]
} )
export class AppModule {
}

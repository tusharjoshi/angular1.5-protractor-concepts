import { NgModule } from 'ng-metadata/core';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule( {
  declarations: [
    AppComponent,
    MoviesComponent
  ]
} )
export class AppModule {
}

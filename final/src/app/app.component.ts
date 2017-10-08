import { Component } from 'ng-metadata/core';
import { MoviesComponent } from './movies/movies.component'

@Component({
  selector: 'np-app',
  styles: [ require( './app.scss' ) ],
  template: require('./app.component.html')
})
export class AppComponent {

  place = 'World!';

  changeMessage() {
    this.place = "Universe"
  }

}

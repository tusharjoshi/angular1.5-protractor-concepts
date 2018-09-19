import { Component, Inject, OnInit } from 'ng-metadata/core';
import { MovieService } from './movies.service';

@Component({
  selector: 'np-movies',
  styles: [ require( './movies.scss' ) ],
  template: require('./movies.component.html'),
  providers: [ MovieService ]
})
export class MoviesComponent implements OnInit {

  movies: any[];

  constructor(@Inject('movieService') private movieService,
    @Inject('$log') private $log: ng.ILogService ) {

  }

  ngOnInit() {
    this.$log.info('Movie component init called');
    this.movieService.fetchMovies().then((data) => {
      this.movies = data;
    });
  }

  upRating(movie) {
      if (movie.rating < 5) {
          movie.rating += 1;
      }
  }

  downRating(movie) {
      if (movie.rating > 1) {
          movie.rating -= 1;
      }
  }
}


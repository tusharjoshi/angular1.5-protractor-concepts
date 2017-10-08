import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component({
  selector: 'np-movies',
  styles: [ require( './movies.scss' ) ],
  template: require('./movies.component.html')
})
export class MoviesComponent implements OnInit {

  movies = [];

  constructor(
    @Inject('$http') private $http: ng.IHttpService
  ) {
  }

  fetchMovies($http) {
    return $http.get('/movies.json')
    .then((response) => {
      return response.data;
    });
  }

  ngOnInit() {
    this.fetchMovies(this.$http).then((movies) => {
      this.movies = movies;
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


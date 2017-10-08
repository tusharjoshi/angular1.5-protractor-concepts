import { Component, OnInit, Inject } from 'ng-metadata/core';

@Component({
  selector: 'np-app',
  styles: [ require( './app.scss' ) ],
  template: require('./app.component.html')
})
export class AppComponent implements OnInit{

  place = 'World!';
  movies = [];

  constructor(
    @Inject('$http') private $http: ng.IHttpService
  ) {
    
  }

  fetchMovies($http) {
    return $http.get("/movies.json")
    .then((response) => {
      return response.data;
    });
  }

  changeMessage() {
    this.place = "Universe"
  }

  ngOnInit() {
    this.fetchMovies(this.$http).then((movies)=>{
      this.movies = movies;
    });
  }

  upRating(movie) {
    if( movie.rating < 5 ) {
      movie.rating += 1;
    }
  }

  downRating(movie) {
    if( movie.rating > 1 ) {
      movie.rating -= 1;
    }
  }

}

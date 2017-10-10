import { Injectable, Inject } from 'ng-metadata/core';

@Injectable('movieService')
export class MovieService {

    constructor(
    @Inject('$http') private $http: ng.IHttpService,
    @Inject('$log') private $log: ng.ILogService
    ) {
    }

    fetchMovies() {
        return this.$http.get('/movies.json')
        .then((response) => {
            return response.data;
        });
    }
}

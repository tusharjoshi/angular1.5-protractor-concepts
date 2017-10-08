import { Component, Input, OnInit, OnChanges } from 'ng-metadata/core';

@Component({
  selector: 'np-movie-rating',
  template: require('./movie-rating.component.html'),
  legacy: {
      transclude: true
  }
})
export class MovieRatingComponent implements OnInit, OnChanges {
    @Input() value: number;
    entries: any[];

    ngOnInit() {
        this.entries = new Array(Number(this.value));
    }

    ngOnChanges() {
        this.entries = new Array(Number(this.value));
    }
}

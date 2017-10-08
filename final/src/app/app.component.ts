import { Component } from 'ng-metadata/core';

@Component({
  selector: 'np-app',
  styles: [ require( './app.scss' ) ],
  templateUrl: '/app/app.component.html'
})
export class AppComponent {

  place = 'World!';

}

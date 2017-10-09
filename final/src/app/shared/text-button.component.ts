import { Component, Input, OnInit } from 'ng-metadata/core';

@Component({
  selector: 'np-text-button',
  template: require('./text-button.component.html')
})
export class TextButtonComponent implements OnInit {
    message: string = 'Some Message';

    ngOnInit() {
        this.message = 'Other Message';
    }

    changeMessage() {
        this.message = 'New Message';
    }
}

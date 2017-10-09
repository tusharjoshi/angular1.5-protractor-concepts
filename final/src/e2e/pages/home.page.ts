import { browser, element, by } from 'protractor';

export class HomePage {
    button = element(by.id('mybutton'));
    message = element(by.binding('message'));

    get() {
        browser.get('/');
    }

    clickButton() {
        this.button.click();
    }

    getTitle() {
        return browser.getTitle();
    }
}
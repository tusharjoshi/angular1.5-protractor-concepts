import { browser, element, by } from 'protractor';

describe('Basic Tests', () => {

    it('First Test', () => {
        browser.get('/').then(() => {
            browser.getTitle().then((data) => {
                expect(data).toEqual('Angular Sample Application');
            });
        });
    });

    it('should display message when button clicked', () => {
        let button = element(by.id('mybutton'));
        let message = element(by.binding('message'));

        button.click().then(() => {
            message.getText().then((data) => {
                expect(data).toContain('New Message');
            });
        });
    });

});

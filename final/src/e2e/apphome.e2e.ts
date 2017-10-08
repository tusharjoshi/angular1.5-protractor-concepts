import { browser } from 'protractor';

describe('Basic Tests', () => {

    it('First Test',() => {
        browser.get('/').then(() =>{
            browser.getTitle().then((data) => {
                expect(data).toEqual('Angular Sample Application');
            });
        });
    });

});
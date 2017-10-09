import { browser, element, by } from 'protractor';
import { HomePage } from './pages/home.page';

describe('Screenshot Test', () => {

    let homePage = new HomePage();

    beforeEach(() => {
        homePage.get();
    });

    it('This test shall fail resulting in screenshot',() => {
        homePage.getTitle().then((data) => {
            expect(data).toEqual('Angular Sample Application2');
        });
    });

    it('should display message when button clicked',() => {
        homePage.clickButton();
        
        homePage.message.getText().then((data) => {
            expect(data).toContain('New Message2');
        });
    });

});
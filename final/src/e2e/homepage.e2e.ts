import { browser, element, by } from 'protractor';
import { HomePage } from './pages/home.page';

describe('Basic Tests', () => {

    let homePage = new HomePage();

    beforeEach(() => {
        homePage.get();
    });

    it('First Test',() => {
        homePage.getTitle().then((data) => {
            expect(data).toEqual('Angular Sample Application');
        });
    });

    it('should display message when button clicked',() => {
        homePage.clickButton();
        
        homePage.message.getText().then((data) => {
            expect(data).toContain('New Message');
        });
    });

});
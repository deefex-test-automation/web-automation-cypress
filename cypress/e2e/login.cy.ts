import LoginPage from "../support/page-objects/loginPage";
import SecureAreaPage from "../support/page-objects/secureAreaPage";
import addContext from 'mochawesome/addContext';

describe('The Internet - Login', function() {

    this.beforeEach('Navigate to the login page', function() {
        cy.visit('/login');
    });

    it('using a standard page object model flow in the test', function() {
        const loginPage = new LoginPage();
        loginPage.checkMessageExistence(false);
        loginPage.login();

        const secureArea = new SecureAreaPage();
        secureArea.checkMessageExistence(true);
        secureArea.checkMessageAreaText('You logged into a secure area!');
        secureArea.hideMessageAreaText();
        secureArea.checkMessageExistence(false);

        secureArea.logout();
        const loginPageRevisited = new LoginPage();
        loginPageRevisited.checkMessageExistence(true);
        loginPageRevisited.checkMessageAreaText('You logged out of the secure area!');
        loginPageRevisited.hideMessageAreaText();
        loginPageRevisited.checkMessageExistence(false);
    });

    it('doing exactly the same as above, but embedded in a custom cypress command', function() {
        cy.loginAndLogout();
    });

});
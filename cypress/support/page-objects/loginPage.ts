import BasePage from "./basePage";

export default class LoginPage extends BasePage {
    heading = cy.get('h2');

    constructor() {
        super();
        this.heading.should('have.text', 'Login Page');
    }

   /** 
    * Obtains login credentials, checks they're set and logs into the site 
    * @returns void
    */
    login(): void {
        const username = Cypress.env('username');   // Obtained from the cypress config
        const password = Cypress.env('password');   // Obtained from an environment variable (if set)
        expect(username, 'username was set').to.be.a('string').and.not.be.empty;
        if (typeof password !== 'string' || !password) {
            throw new Error('Password does not have a value. \n' +
            'Find the password value at https://the-internet.herokuapp.com/login\n' +
            'and set using a CYPRESS_password environment variable, then re-run.');
        }

        cy.get('#username').clear().type(username);
        cy.get('#password').clear().type(password, { log: false }); // Don't show the password value in the command log
        cy.get('button[type="submit"]').click();
    }

}
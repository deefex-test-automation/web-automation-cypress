import BasePage from "./basePage";

export default class SecureAreaPage extends BasePage {
    heading = cy.get('h2');

    constructor() {
        super();
        this.heading.should('have.text', ' Secure Area');
    }

   /** 
    * Logs oout of the site 
    * @returns void
    */
    logout(): void {
        cy.get('a[href="/logout"]').click();
    }

}
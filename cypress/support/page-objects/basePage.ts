export default class BasePage{
    heading = cy.get('h2');

    constructor() {
        this.heading.should('be.visible');
    }

   /** 
    * Checks the text in the flash/messages area of the page. 
    * @param message the expected text
    * @returns void
    */
    checkMessageAreaText(message: string): void {
        const messageArea = cy.get('#flash-messages');
        messageArea.should('contain', message);
    }

   /** 
    * Checks whether the flash/messages area is visible or doesn't exist 
    * @param visible boolean depending on which way we're checking
    * @returns void
    */
    checkMessageExistence(visible: boolean): void {
        if (visible) {
            cy.get('#flash').should('be.visible');
        } else {
            cy.get('#flash').should('not.exist');
        }
    }

   /** 
    * Hides the flash/messages area 
    * @returns void
    */
    hideMessageAreaText() {
        cy.get('a[href="#"]').click();
    }
}
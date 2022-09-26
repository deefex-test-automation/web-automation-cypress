import LoginPage from "../page-objects/loginPage";
import SecureAreaPage from "../page-objects/secureAreaPage";

export default function loginAndLogout(): void {
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
}
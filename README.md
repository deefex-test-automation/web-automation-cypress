# web-browser-automation

An example of web browser automation with cypress and a page object model approach

This example illustrates some E2E/web browser automation for the https://the-internet.herokuapp.com/login page

It hopefully illustrates some elements and techniques, such as:

- Class inheritance
- .gitignore usage
- Page object model approach
- Custom cypress commands
- Password/secrets obfuscation
- Basic test reporting (mochawesome)
- Inclusion of screenshots upon failure into mochawesome (html) reports
- Domain defaults (baseUrl)
- Browser selection
- Headless & dashboard execution

## Installation

- `npm install`

## Execution
- Before execution, set an environment variable for the website password which can be found at https://the-internet.herokuapp.com/login
  - If you're using Windows you can do this via `set CYPRESS_password=<password>`
  - If you're using Mac or Linux you can do this via `export CYPRESS_password=<password>`
- `npm run cy` (Open the cypress dashboard)
- `npm run cy:e2e:chrome` (Run headless with chrome)
- `npm run cy:e2e:firefox` (Run headless with firefox)
- You'll see the run status on the command line, but there'll also be an HTML report under `cypress/reports/html`

## Open Issues
- Do not show tsconfig.json warning in terminal for TS projects without tsconfig.json https://github.com/cypress-io/cypress/issues/21805

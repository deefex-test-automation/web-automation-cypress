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

- `npm run cy` (Open the cypress dashboard)
- `npm run cy:e2e:chrome` (Run headless with chrome)
- `npm run cy:e2e:firefox` (Run headless with firefox)
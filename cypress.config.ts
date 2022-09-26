import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1440,
  waitForAnimations: true,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    username: 'tomsmith',
  },
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

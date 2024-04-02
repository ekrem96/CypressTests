/* eslint-disable */

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },

  projectId: "etxc6d",

  env: {
    url: "https://rahulshettyacademy.com"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/tests/examples/*.js',
    testIsolation: false,
    defaultCommandTimeout: 6000
  },
});

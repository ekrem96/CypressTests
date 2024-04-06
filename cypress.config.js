/* eslint-disable */

const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  return config;
}


module.exports = defineConfig({

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output-[hash].xml',
    toConsole: true,
  },

  projectId: "etxc6d",

  env: {
    url: "https://rahulshettyacademy.com"
  },

  
  e2e: {
    specPattern: 'cypress/tests/examples/BDD/*.feature',
    testIsolation: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents,
  },
});

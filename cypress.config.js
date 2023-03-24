const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

//Creacion de preprocesador para la lectura de archivos Cucumber
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5173/",
    //Aqui indicamos que cypress solo nos leera los archivos que lleven .feature en su nombre
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
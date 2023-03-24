const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit EnPartedePago home page", () => {
    cy.visit("/");
});

Then("I should see a title with the text 'En Parte de Pago'", () => {
    cy.get('.MuiToolbar-root > .MuiTypography-root').contains('En Parte de Pago')
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-localstorage-commands";
/* Check the Bypass Login Docunetation.pdf file for details about the current code*/
// import PageInteractions from "../utilities/page-interactions"
Cypress.Commands.add("apiLogin", (phone, password) => {
  cy.request({
    url: "http://206.189.196.39:9395/graphql",
    method: "POST",
    body: {
      query:
        "mutation userLogin($phone: String!, $password: String!){userLogin(phone: $phone, password: $password){access_token}}",
      variables: { phone, password },
    },
  }).then((resp) => {
    cy.setLocalStorage("token", resp.body.data.userLogin.access_token);
  });

});

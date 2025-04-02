/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to log in a user.
       * @example cy.login()
       */
      login(): Chainable<Subject>;
    }
  }
  
/// <reference types="cypress" />

describe('Bookmark Functionality', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('toggles the bookmark state on a job card', () => {
      cy.visit('/jobs');
      cy.get('[data-testid="job-card"]').first().as('firstJobCard');
      cy.get('@firstJobCard')
        .find('[data-testid="bookmark-toggle"]')
        .should('have.attr', 'src', '/bookmarkoff-icon.svg')
        .click()
        .should('have.attr', 'src', '/bookmarkon-icon.svg');
    });
  
    it('displays the bookmarked job in the bookmark list', () => {
      cy.visit('/jobs');
      cy.get('[data-testid="job-card"]').first().as('firstJobCard');
      cy.get('@firstJobCard').find('[data-testid="bookmark-toggle"]').click();
      cy.visit('/bookmarks');
      cy.get('[data-testid="job-card"]').should('contain.text', 'Software Engineer');
    });
  });
  
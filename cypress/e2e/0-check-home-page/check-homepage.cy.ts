/// <reference types="cypress" />
describe('Check Home page', () => {
  it('should have spotify image', () => {
    cy.visit('/');

    cy.findByRole('img').should(
      'have.attr',
      'src',
      'https://links.papareact.com/9xl',
    );
  });
});

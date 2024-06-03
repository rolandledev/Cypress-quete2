describe('Quete 2 Le Coeur du framework', () => {
  beforeEach(() => {
    cy.visit('https://preprod.backmarket.fr/register');
    // Cookies
    cy.get('[data-qa="accept-cta"]').should('contain', 'Tout accepter').click();
  });

  it.skip('Inscription réussie', () => {

    // New customer registration
    cy.url().should('contain', 'register');

    cy.get('#firstName').type('joe');
    cy.get('#lastName').type('lateuf');
    cy.get('#signup-email').type('joe.lateuf'+ Date.now() +'@gmail.com');
    cy.get('#signup-password').type('123456Az');
    cy.get('[data-qa="signup-submit-button"]').should('contain', 'Enchanté').click();

    cy.url().should('contain', 'dashboard');
  })

  it.skip('Inscription échouée', () => {
    // New customer registration
    cy.url().should('contain', 'register');
    
    cy.get('#firstName').type('joe');
    cy.get('#lastName').type('lateuf');
    cy.get('#signup-email').type('joe.lateuf'+ Date.now() +'@gmail.com');
    // cy.get('#signup-password').type('123456Az');
    cy.get('[data-qa="signup-submit-button"]').as('submit')
    cy.get('@submit').click();

    cy.get('@submit').should('have.attr', 'disabled');
    
  });

    it.only('Authentification réussie', () => {
      cy.get('#signin-email').should('be.visible').type('joe.lateuf@gmail.com');
      cy.get('#signin-password').should('be.visible').type('123456Az');
      cy.get('[data-qa="signin-submit-button"]').should('be.visible').click();

      cy.url().should('contain', 'dashboard');
    });
}) 
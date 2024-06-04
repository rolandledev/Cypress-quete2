describe("Cypress 03 - Tests d'APIs avec Cypress", () => {

    let baseUrl = 'practice.expandtesting.com/notes/api';

    // Smoke test
    it('SMOKE TEST', () => {        
        cy.request(baseUrl + '/health-check').then(response => {
            cy.expect(response.body).to.have.property('status');
            cy.expect(response.status).eq(200);
        });
    });

    it('Create USER', () => {
        let users = require('../fixtures/users');
        let formData = new FormData();

        formData.append('name', users.name);
        formData.append('email', users.email);
        formData.append('password', users.password);

        cy.request({
            method: 'POST',
            url: baseUrl + '/users/register',
            body: formData
        }).its('status').should('be.equal', 201);
    });

});
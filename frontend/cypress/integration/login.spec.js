context('Login', () => {
    before(() => {
        cy.visit('http://localhost:4000/login');
    });
    it('Login', () => {
        cy.get('.username').type('fana');
        cy.get('.password').type('password');
        cy.get('.submit').click();
        cy.wait(500);
        cy.get('h1').contains('mon titre');
    });
});

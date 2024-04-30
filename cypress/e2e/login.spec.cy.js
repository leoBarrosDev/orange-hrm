/// <reference types="cypress" />

describe('Orange-HRM Tests', () => {
    it('Success login', () => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })
})
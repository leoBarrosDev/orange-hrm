/// <reference types="cypress" />

describe('Orange-HRM Tests', () => {
    it('Success login', () => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })
})
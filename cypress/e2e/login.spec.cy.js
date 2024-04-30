/// <reference types="cypress" />

describe('Orange-HRM Tests', () => {
    it('Success login', () => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin123')
        cy.get("[type='submit']").click()
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it('Failed login', () => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get("[name='username']").type('Admin')
        cy.get("[name='password']").type('admin1234')
        cy.get("[type='submit']").click()
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })
})
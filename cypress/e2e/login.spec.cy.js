/// <reference types="cypress" />

import user from '../fixtures/users/user.json'

describe('Orange-HRM Tests', () => {

    const selectorList = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']"
    }

    beforeEach(() => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Success login', () => {
        cy.get(selectorList.usernameField).type(user.name)
        cy.get(selectorList.passwordField).type(user.password)
        cy.get(selectorList.submitButton).click()
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it('Failed login with invalid user', () => {
        cy.get(selectorList.usernameField).type('Administrator')
        cy.get(selectorList.passwordField).type(user.password)
        cy.get(selectorList.submitButton).click()
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })

    it('Failed login with invalid password', () => {
        cy.get(selectorList.usernameField).type(user.name)
        cy.get(selectorList.passwordField).type('admin1234')
        cy.get(selectorList.submitButton).click()
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })
})
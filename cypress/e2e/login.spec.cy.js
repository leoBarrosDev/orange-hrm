/// <reference types="cypress" />

import user from '../fixtures/users/user.json'
import Login, { } from '../pages/loginPage.js'

describe('Orange-HRM Tests', () => {

    beforeEach(() => {
        cy.accessLoginPage()
        // Login.accessLoginPage()
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Success login', () => {
        cy.login(user.name, user.password)
        //Login.login(user.name, user.password)
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })

    it('Failed login with invalid user', () => {
        cy.login('Administrator', user.password)
        //Login.login('Administrator', user.password)
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })

    it('Failed login with invalid password', () => {
        cy.login(user.name, 'admin1234')
        //Login.login(user.name, 'admin1234')
        cy.get('.oxd-alert-content').should('have.text', 'Invalid credentials')
    })
})
/// <reference types="cypress" />

import user from '../fixtures/users/user.json'
import { faker } from '@faker-js/faker'

describe('My-Info tests', () => {

    const selectorList = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']"
    }

    beforeEach(() => {
        cy.visit('/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get(selectorList.usernameField).type(user.name)
        cy.get(selectorList.passwordField).type(user.password)
        cy.get(selectorList.submitButton).click()
    })
    it('Test Update My Info', () => {
        cy.get("[href='/web/index.php/pim/viewMyDetails']").click()
        cy.get('[name="firstName"]').clear().type(faker.person.firstName())
        cy.get('[name="middleName"]').clear().type(faker.person.middleName())
        cy.get('[name="lastName"]').clear().type(faker.person.lastName())
        cy.get('.oxd-input-group').eq(4).clear().type(faker.string.alphanumeric(10))
        cy.get('.oxd-input-group').eq(5).clear().type(faker.string.alphanumeric(10))
        cy.get('.oxd-input-group').eq(6).clear().type(faker.number.int({ min: 1, max: 5 }))
        cy.get('.oxd-date-input').eq(0).clear().type("2024-22-11")
        cy.get('.--close').click()
        cy.get('.oxd-select-text-input').eq(0).click()
        cy.get(':nth-child(27) > span').click()
        cy.get('.oxd-radio-input').eq(1).click()
        cy.get("[type='submit']").eq(0).click()
        cy.get('.oxd-text--toast-message')
            .should('be.visible')
            .and('have.text', 'Successfully Updated')


    })
})
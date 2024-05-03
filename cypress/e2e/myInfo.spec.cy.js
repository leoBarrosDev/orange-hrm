/// <reference types="cypress" />

import MyInfo from '../pages/myInfoPage.js';
import user from '../fixtures/users/user.json'
import { faker } from '@faker-js/faker'

describe('My-Info tests', () => {

    const selectorList = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        submitButton: "[type='submit']"
    }

    beforeEach(() => {
        cy.accessLoginPage()
        cy.login(user.name, user.password)
        cy.title().should('eq', 'OrangeHRM')
        MyInfo.accessMyInfoPage()

    })
    it.only('Test Update My Info', () => {
        MyInfo.fillEmployeeFullName(faker.person.firstName(), faker.person.middleName(), faker.person.lastName())
        MyInfo.fillEmployeeIds(faker.string.alphanumeric(10), faker.string.alphanumeric(10), faker.number.int({ min: 1, max: 5 }))
        MyInfo.fillDataLicense(faker.number.int({ min: 1, max: 5 }), faker.date.future().toISOString().slice(0, 10))
        MyInfo.fillNatiionality()
        MyInfo.fillBirthdate(faker.date.future().toISOString().slice(0, 10))
        MyInfo.fillGender()
        MyInfo.sendNewData()
        MyInfo.successupdateData()
    })
})
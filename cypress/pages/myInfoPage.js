/// <reference types="cypress" />

class MyInfo {

    selectorsListMyInfoPage() {
        const selectorList = {
            myInfoicon: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            employeeIdField: '.oxd-input-group',
            otherIdField: '.oxd-input-group',
            driverLicenseField: '.oxd-input-group',
            licenseExpiryDateField: '.oxd-date-input',
            dateCloseButton: '.--close',
            nationalityDropdownField: '.oxd-select-text-input',
            brazilianOption: ':nth-child(27) > span',
            birthdateIcon: '.oxd-date-input-icon',
            birthDateField: '.oxd-date-input',
            clearDateIcon: '.--clear',
            genderOption: '.oxd-radio-input',
            saveButton: "[type='submit']",
            successMessage: '.oxd-text--toast-message',
        }
        return selectorList
    }
    accessMyInfoPage() {
        cy.get(this.selectorsListMyInfoPage().myInfoicon).click()
    }

    fillEmployeeFullName(firstName, middleName, lastName) {
        cy.get(this.selectorsListMyInfoPage().firstNameField).clear().type(firstName)
        cy.get(this.selectorsListMyInfoPage().middleNameField).clear().type(middleName)
        cy.get(this.selectorsListMyInfoPage().lastNameField).clear().type(lastName)
    }

    fillEmployeeIds(employeeId, otherId) {
        cy.get(this.selectorsListMyInfoPage().employeeIdField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsListMyInfoPage().otherIdField).eq(5).clear().type(otherId)
    }

    fillDataLicense(licenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsListMyInfoPage().driverLicenseField).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorsListMyInfoPage().licenseExpiryDateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsListMyInfoPage().dateCloseButton).click()
    }

    fillNatiionality() {
        cy.get(this.selectorsListMyInfoPage().nationalityDropdownField).eq(0).click()
        cy.get(this.selectorsListMyInfoPage().brazilianOption).click()
    }

    fillBirthdate(birthDate) {
        cy.get(this.selectorsListMyInfoPage().birthdateIcon).eq(1).click()
        cy.get(this.selectorsListMyInfoPage().clearDateIcon).click()
        cy.get(this.selectorsListMyInfoPage().birthDateField).eq(1).type(birthDate)
    }

    fillGender() {
        cy.get(this.selectorsListMyInfoPage().genderOption).eq(1).click()
    }

    sendNewData() {
        cy.get(this.selectorsListMyInfoPage().saveButton).eq(0).click()
    }

    successupdateData() {
        cy.get(this.selectorsListMyInfoPage().successMessage)
            .should('be.visible')
            .and('have.text', 'Successfully Updated')
    }
}

export default new MyInfo()
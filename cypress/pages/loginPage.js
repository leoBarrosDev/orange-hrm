class Login {
    selectorList() {
        const selectorList = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            submitButton: "[type='submit']"
        }

        return selectorList
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    login(username, password) {
        // cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().submitButton).click()
    }
}

export default new Login()
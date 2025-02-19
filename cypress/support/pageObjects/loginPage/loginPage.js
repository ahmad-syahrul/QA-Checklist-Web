const locator = require('./loginLocators')

class loginPage {

    inputUsername(username) {

        cy.wait(3000);
        cy.xpath(locator.input_username).type(username)

    }

    inputPassword(password) {

        cy.wait(3000);
        cy.xpath(locator.input_password).type(password)

    }

    clickButtonSubmit() {

        cy.xpath(locator.button_submit).click()
        cy.wait(20000);

    }

    verifyUserNotFound() {

        cy.xpath(locator.user_not_found).contains('User not found.')

    }

    verifySuccesLogin() {

        cy.xpath(locator.succes_login,{Timeout: 5000}).should('be.visible')

    }

    verifyWrongPassword() {

        cy.xpath('//*[@id="app"]/div[2]/div[2]/div/div[1]/div[2]/p[1]').contains('User or password are missmatch.')

    }

}

module.exports = new loginPage();
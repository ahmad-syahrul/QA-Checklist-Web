const locator = require('./urineTestLocators')

class urineTestPage {

    clickButtonHamburger() {

        cy.xpath(locator.button_hamburger).click()

    }

    clickMenuUrineTest() {

        cy.xpath(locator.button_urineTest).contains('Urine Test').click()

    }

    clickMenuToolsAndMaterials() {

        cy.xpath(locator.button_toolsAndMaterials).contains('Tools And Materials').click()

    }

    verifyToolsAndMaterialsPage() {

        cy.contains('Tools And Materials').should('be.visible')

    }

    verifyUrineTestResultPage() {

        cy.contains('Urine Test Result').should('be.visible')
    }

    clickMenuResult() {

        cy.xpath(locator.button_result).click()
    }


}

module.exports = new urineTestPage();
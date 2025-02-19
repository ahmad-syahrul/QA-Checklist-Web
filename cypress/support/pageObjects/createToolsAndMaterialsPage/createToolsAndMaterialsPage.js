const locator = require('./createToolsAndMaterialsLocators')

class createToolsAndMaterialsPage {

    clickButtonCreateToolsAndMaterials() {

        cy.xpath(locator.button_create_toolsAndMaterials).click()

    }

    verifyDirectToCreateToolsAndMaterialsPageSucces() {

        cy.contains('Tools And Materials Form').should('be.visible')

    }

    inputToolsName(name) {

        cy.wait(5000);
        cy.xpath(locator.input_field_name).type(name)

    }

    inputFieldStock(number) {

        cy.wait(5000);
        cy.xpath(locator.input_field_stock).type(number)

    }

    clearFieldStock() {

        cy.wait(2000);
        cy.xpath(locator.input_field_stock).clear()

    }

    clickButtonUpdate() {

        cy.contains('Update').click()

    }

    verifyFieldStock() {

        cy.wait(5000);
        cy.contains('The stock field is required').should('be.visible')

    }

    verifyFieldnName() {

        cy.wait(5000);
        cy.contains('The name field is required').should('be.visible')

    }

    verifyToolsAlreadyExist() {

        cy.wait(5000);
        cy.contains('The name has already been taken').should('be.visible')

    }

    verifyCreateToolsSucces() {

        cy.wait(5000);
        cy.xpath('//*[@class="w-full"]').should('be.visible')

    }



}

module.exports = new createToolsAndMaterialsPage();
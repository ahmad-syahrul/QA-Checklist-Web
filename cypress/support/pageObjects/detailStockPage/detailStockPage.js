const locator = require('./detailStockLocator')

class detailStockPage {

    clickButtonDetailStock() {

        cy.xpath(locator.button_detail).click()

    }

    verifyLogsStock() {

        cy.xpath(locator.logs_stock).should('be.visible')

    }

    verifyDirectToDetailStockSucces() {

        cy.contains('Detail').should('be.visible')


    }




}

module.exports = new detailStockPage();
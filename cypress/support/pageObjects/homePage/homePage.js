class homePage {

    goToHomePage() {

        cy.visit('https://staging-internal.holywings.id/')

    }

}

module.exports = new homePage();
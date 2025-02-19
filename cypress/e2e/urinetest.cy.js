const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');
const { faker } = require('@faker-js/faker');
const urineTestPage = require('../support/pageObjects/urineTestPage/urineTestPage');




describe('urinetest', () => {

    Cypress.on('uncaught:exception', () => { return false })
    beforeEach(() => {

        homePage.goToHomePage();
        loginPage.inputUsername('005819');
        loginPage.inputPassword('password');
        loginPage.clickButtonSubmit();
        urineTestPage.clickButtonHamburger();
    })

    it('verifikasi user berhasil masuk kehalaman tools and materials', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();

    })

    it('verifikasi user berhasil masuk kehalaman urine test result', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuResult();
        urineTestPage.verifyUrineTestResultPage();

    })

    
})
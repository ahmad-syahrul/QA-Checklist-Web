const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');
const { faker }  = require('@faker-js/faker');
const urineTestPage = require('../support/pageObjects/urineTestPage/urineTestPage');
const createToolsAndMaterialsPage = require('../support/pageObjects/createToolsAndMaterialsPage/createToolsAndMaterialsPage');
const detailStockPage = require('../support/pageObjects/detailStockPage/detailStockPage');


describe('Detail Stock', () => {

    Cypress.on('uncaught:exception', () => { return false })
    beforeEach(() => {

        homePage.goToHomePage();
        loginPage.inputUsername('005819');
        loginPage.inputPassword('password');
        loginPage.clickButtonSubmit();
        urineTestPage.clickButtonHamburger();
        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
    })


    it('verifikasi user dapat membuka detail stock', () => {

        detailStockPage.clickButtonDetailStock();
        detailStockPage.verifyDirectToDetailStockSucces();

    })

    it('verifikasi terdapat logs history pada detail stock', () => {

        detailStockPage.clickButtonDetailStock();
        detailStockPage.verifyLogsStock();


    })
    
})
const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');
const { faker }  = require('@faker-js/faker');
const urineTestPage = require('../support/pageObjects/urineTestPage/urineTestPage');
const createToolsAndMaterialsPage = require('../support/pageObjects/createToolsAndMaterialsPage/createToolsAndMaterialsPage');




describe('create tools and materials', () => {

    Cypress.on('uncaught:exception', () => { return false })
    beforeEach(() => {

        homePage.goToHomePage();
        loginPage.inputUsername('005819');
        loginPage.inputPassword('password');
        loginPage.clickButtonSubmit();
        urineTestPage.clickButtonHamburger();
    })


    it('verifikasi user berhasil masuk kehalaman create tools and materials', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.verifyDirectToCreateToolsAndMaterialsPageSucces();

    })

    it('verifikasi create tools dengan mengosongkan field stock', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.inputToolsName('Tabung');
        createToolsAndMaterialsPage.clearFieldStock();
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyFieldStock();

    })

    it('verifikasi create tools dengan mengosongkan field name', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.clearFieldStock();
        createToolsAndMaterialsPage.inputFieldStock('100');
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyFieldnName();

    })

    it('verifikasi create tools dengan input name yang tools yang sudah ada', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.inputToolsName('Gelas Urine')
        createToolsAndMaterialsPage.inputFieldStock('100');
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyToolsAlreadyExist();

    })

    it('verifikasi create tools dengan input data yang sesuai', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.inputToolsName(faker.commerce.product());
        createToolsAndMaterialsPage.inputFieldStock('100');
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyCreateToolsSucces();

    })

    it('verifikasi create tools dengan input field name dengan hanya spasi', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.inputToolsName('       ');
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyFieldnName();

    })

    it('verifikasi create tools dengan input field stock dengan hanya spasi', () => {

        urineTestPage.clickMenuUrineTest();
        urineTestPage.clickMenuToolsAndMaterials();
        createToolsAndMaterialsPage.clickButtonCreateToolsAndMaterials();
        createToolsAndMaterialsPage.inputToolsName(faker.commerce.product());
        createToolsAndMaterialsPage.clearFieldStock();
        createToolsAndMaterialsPage.inputFieldStock('     ');
        createToolsAndMaterialsPage.clickButtonUpdate();
        createToolsAndMaterialsPage.verifyFieldStock();

    })


    
})
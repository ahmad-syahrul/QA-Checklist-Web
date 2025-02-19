const homePage = require('../support/pageObjects/homePage/homePage');
const loginPage = require('../support/pageObjects/loginPage/loginPage');
const { faker } = require('@faker-js/faker');


describe('login', () => {

  Cypress.on('uncaught:exception', () => { return false })
  it('verifikasi login dengan data yang valid', () => {

    homePage.goToHomePage();
    loginPage.inputUsername('005819');
    loginPage.inputPassword('password');
    loginPage.clickButtonSubmit();
    cy.wait(20000);
    loginPage.verifySuccesLogin();
    
  })
  
  it('verifikasi login dengan user yang tidak terdaftar', () => {

    homePage.goToHomePage();
    loginPage.inputUsername(faker.number.int());
    loginPage.inputPassword(faker.string.sample());
    loginPage.clickButtonSubmit();
    cy.wait(20000);
    loginPage.verifyUserNotFound();
    
  })

  it('verifikasi login dengan password yang salah', () => {

    homePage.goToHomePage();
    loginPage.inputUsername('005819');
    loginPage.inputPassword(faker.string.sample());
    loginPage.clickButtonSubmit();
    cy.wait(20000);
    loginPage.verifyWrongPassword();
    
  })

})

import {LoginPages} from "../Pages/login_page.js"

const loginPage = new LoginPages()

it('login test', ()=> {
    loginPage.visitLogin('https://konga.com/');
    loginPage.LoginBtn();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clicklogin();

/** 
    cy.visit('https://konga.com/')
    cy.contains('Login / Signup').click({force: true})
    cy.get('#username').type({log: false})
    cy.get('#password').type({log: false})
    cy.get('button[class="_0a08a_3czMG _988cf_1aDdJ"]').click()
    */
})
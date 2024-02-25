export class LoginPages{
    loginPage_loginBtn = 'Login / Signup'
    loginPage_username = '#username'
    loginPage_password = '#password'
    
    

    visitLogin(URL){
        cy.visit(URL)
    }
    LoginBtn(loginBtn){
        cy.contains(loginPage_loginBtn).click({force: true})
    }
    enterUsername(username){
        cy.get(loginPage_username).type({log: false})
    }
    enterPassword(password){
    cy.get(loginPage_password).type(password,{log: false})
    }
    clicklogin(clicklogin){
        cy.get(loginPage_clickLogin).click()
    }
}
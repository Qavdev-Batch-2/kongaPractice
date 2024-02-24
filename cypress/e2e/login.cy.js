/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('login Test', () => {

  before(()=> {
    cy.visit('/')
    cy.login('mahzeeljohn@gmail.com','E.lens123456')
  })


  it('should login', () => {
 

    
  })
})
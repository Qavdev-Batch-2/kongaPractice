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
    cy.url().should('include','https://www.konga.com/')
    cy.get('._0d327_3ftRW a').should('have.length', 8)
    cy.location('protocol').should('eq', 'https')
    cy.location('hostname').should('eq', 'www.konga.com')
    cy.location('pathname').should('eq','/')


    
  })
})
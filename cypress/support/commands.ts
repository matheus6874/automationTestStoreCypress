
import loc from '../support/locators'


const relativeWait = 3000

Cypress.Commands.add('validateTittle', tittle => {
    cy.title().should('be.equal', tittle)
})

Cypress.Commands.add('validateTextBody', text => {
    cy.get('body', { timeout: relativeWait }).should('contain', text)
})

Cypress.Commands.add('login', (loginName,password) => {
  cy.get(loc.USER_LOGIN_PAGE.INPUT_LOGIN_NAME).type(loginName)
  cy.get(loc.USER_LOGIN_PAGE.INPUT_PASSWORD).type(password)
  cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
  cy.validateTittle('My Account')
  cy.validateTextBody('Welcome back Matheus')
})

  
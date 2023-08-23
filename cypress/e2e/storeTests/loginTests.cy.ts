import loc from '../../support/locators'

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit('account/login')
    cy.validateTittle('Account Login')
    }
  )

  it('valdate user not registered', () => {
    cy.get(loc.USER_LOGIN_PAGE.INPUT_LOGIN_NAME).type(Cypress.env('emailNotRegistered'))
    cy.get(loc.USER_LOGIN_PAGE.INPUT_PASSWORD).type('12345')
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Error: Incorrect login or password provided.')
  })


  it('Validate blank username and password', () => {
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Error: Incorrect login or password provided.')
  })

   it('validade login with successy', () => {
    cy.login(Cypress.env('user'),Cypress.env('password'))
   })
})


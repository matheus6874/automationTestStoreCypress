import loc from '../../support/locators'

describe('Forgot your password tests', () => {

  beforeEach(() => {
    cy.visit('account/forgotten/password')
    cy.validateTittle('Forgot Your Password?')
    }
  )

  it('validade input invalid user and e-mail', () => {
    cy.get(loc.FORGOT_PASSWORD_PAGE.INPUT_LOGIN_NAME).type(Cypress.env('invalidUser'))
    cy.get(loc.COMMON_PAGE.INPUT_FORGOT_EMAIL).type(Cypress.env('invalidEmail'),{force:true})
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()    
    cy.validateTextBody('Error: No records found matching information your provided, please check your information and try again!')
  });

  it('Validate blank username and password', () => {
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()     
    cy.validateTextBody('Error: The Email address was not provided or not found in our records, please try again!')
  });

  it('validate send e-mail with instructions for reset password', () => {
    cy.get(loc.FORGOT_PASSWORD_PAGE.INPUT_LOGIN_NAME).type(Cypress.env('user'))
    cy.get(loc.COMMON_PAGE.INPUT_FORGOT_EMAIL).type(Cypress.env('emailWithRegister'))
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()    
    cy.validateTextBody('Success: Password reset link has been sent to your e-mail address.')
  });
})


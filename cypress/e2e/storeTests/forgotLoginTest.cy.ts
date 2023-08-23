import loc from '../../support/locators'

describe('Forgot your login tests', () => {

  beforeEach(() => {
    cy.visit('account/forgotten/loginname')
    cy.validateTittle('Forgot Your Login Name?')
    }
  )

  it('validade input invalid last name and e-mail', () => {
    cy.get(loc.FORGOT_LOGIN_PAGE.INPUT_LAST_NAME).type('teste')
    cy.get(loc.COMMON_PAGE.INPUT_FORGOT_EMAIL).type(Cypress.env('invalidEmail'))
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()    
    cy.validateTextBody('Error: No records found matching information your provided, please check your information and try again!')
  });

  it('Validate blank username and password', () => {
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()    
    cy.validateTextBody('Error: The Email address was not provided or not found in our records, please try again!')
  });

  it('validate send e-mail with instructions for reset password', () => {
    cy.get(loc.FORGOT_LOGIN_PAGE.INPUT_LAST_NAME).type('cristino')
    cy.get(loc.COMMON_PAGE.INPUT_FORGOT_EMAIL).type(Cypress.env('emailWithRegister'))
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()  
    cy.validateTextBody('Success: Your login name reminder has been sent to your e-mail address.')
  });
})


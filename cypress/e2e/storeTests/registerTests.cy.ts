import loc from '../../support/locators'
import { GenetareDataFakeBuilder } from '../builders/GenetareDataFakeBuilder'

describe('Register tests', () => {
  let fakeBuilder: GenetareDataFakeBuilder

  beforeEach(() => {
    fakeBuilder = new GenetareDataFakeBuilder()
    cy.visit('account/create')
    cy.validateTittle('Create Account')
    }
  )

  it('validates non-acceptance of the privacy terms', () => {
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click()  
    cy.validateTextBody('Error: You must agree to the Privacy Policy!')
  });

  it('validate try send with blank inputs', () => {
    cy.get(loc.REGISTER_PAGE.CHECK_BOX_PRIVACY_POLICY).click()
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click() 
    cy.validateTextBody('Login name must be alphanumeric only and between 5 and 64 characters!')
    cy.validateTextBody('First Name must be between 1 and 32 characters!')
    cy.validateTextBody('Last Name must be between 1 and 32 characters!')
    cy.validateTextBody('Email Address does not appear to be valid!')
    cy.validateTextBody('Address 1 must be between 3 and 128 characters!')
    cy.validateTextBody('City must be between 3 and 128 characters!') 
    cy.validateTextBody('Zip/postal code must be between 3 and 10 characters!') 
    cy.validateTextBody('Please select a region / state!') 
    cy.validateTextBody('Password must be between 4 and 20 characters!') 
  });

  it('validate register with success', () => {
    cy.get(loc.REGISTER_PAGE.INPUT_FIRST_NAME).type(fakeBuilder.generateName())
    cy.get(loc.REGISTER_PAGE.INPUT_LAST_NAME).type(fakeBuilder.generateLastName())
    cy.get(loc.REGISTER_PAGE.INPUT_EMAIL).type(fakeBuilder.generateEmail())
    cy.get(loc.REGISTER_PAGE.INPUT_ADRESS).type('Test Adress 22')
    cy.get(loc.REGISTER_PAGE.SELECT_COUNTRY).select('Brazil')
    cy.get(loc.REGISTER_PAGE.SELECT_REGION).select('Minas Gerais')
    cy.get(loc.REGISTER_PAGE.INPUT_CITY).type('Uberlândia')
    cy.get(loc.REGISTER_PAGE.INPUT_ZIP_CODE).type('00000')
    cy.get(loc.REGISTER_PAGE.INPUT_LOGIN_NAME).type(fakeBuilder.generateLoginName())
    cy.get(loc.REGISTER_PAGE.INPUT_PASSWORD).type(fakeBuilder.generateLoginName())
    cy.get(loc.REGISTER_PAGE.INPUT_CONFIRM_PASSOWRD).type(fakeBuilder.generateLoginName())
    cy.get(loc.REGISTER_PAGE.CHECK_BOX_PRIVACY_POLICY).click()
    cy.contains(loc.COMMON_PAGE.CY_CONTINUE).click() 
    cy.validateTextBody('Your Account Has Been Created!')
  });
})



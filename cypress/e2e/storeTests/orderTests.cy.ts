import loc from '../../support/locators'

describe('Orders tests', () => {

  beforeEach(() => {
    cy.visit('')
    cy.validateTittle('A place to practice your automation skills!')
    }
  )

  it('validate that it is not possible to make a purchase if the user is not logged in to the system', () => {
    cy.get(loc.HOME.BTN_HOMEAPPAREL_ACCESSORIES).click()
    cy.contains(loc.HOME.CY_SHOES_PRODUCTS).click({force:true})
    cy.contains(loc.HOME.CY_FIORELLA_PURPLE_PRODUCT).click({force:true})
    cy.get(loc.HOME.BTN_CART).click()
    cy.get(loc.HOME.BTN_CHECKOUT).click()
    cy.validateTittle('Account Login')
  }) 

  it('should create order', () => {
    cy.contains(loc.HOME.CY_LOGIN).click()
    cy.login(Cypress.env('user'),Cypress.env('password'))
    cy.get(loc.HOME.BTN_HOMEAPPAREL_ACCESSORIES).click()
    cy.contains(loc.HOME.CY_SHOES_PRODUCTS).click({force:true})
    cy.contains(loc.HOME.CY_FIORELLA_PURPLE_PRODUCT).click({force:true})
    cy.get(loc.HOME.BTN_CART).click()
    cy.get(loc.HOME.BTN_CHECKOUT).click()
    cy.get(loc.HOME.BTN_CONFIRM_ORDER).click()
    cy.validateTextBody('Your Order Has Been Processed!')
  }) 
})


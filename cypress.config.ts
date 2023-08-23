import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://automationteststore.com/index.php?rt=',
  },
  env: {
    emailNotRegistered: 'matheus.teste@gmail.com',
    user: 'matheuscristino6874',
    invalidUser: 'usernotexits',
    emailWithRegister: 'matheus.scristino@gmail.com',
    invalidEmail: '123@123',
    password: 'teste@1000',
  },
  chromeWebSecurity: false
})


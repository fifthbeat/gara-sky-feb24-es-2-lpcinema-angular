import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'src/tests/**/*.cy.ts'
  }

})

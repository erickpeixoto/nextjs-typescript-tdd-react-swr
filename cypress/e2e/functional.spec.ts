/// <reference types="cypress" />
describe('Should test at a functional level', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('Should open and close Sidebar', () => {
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('.makeStyles-toolbar-10 > .MuiButtonBase-root').click()
  })

  it('Should execute feature search ', () => {
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    ).type('erick')
  })
})

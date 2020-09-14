/// <reference types="cypress" />

describe('Should test at a functional level', () => {
  before(() => {
    cy.visit('http://localhost:3000/user')
  })
  it('Should open and close Sidebar', () => {
    cy.get('.makeStyles-toolbar-10 > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get('.makeStyles-toolbar-10 > .MuiButtonBase-root').click()
  })

  it('should create an a user', () => {
    cy.get(
      '.MTableToolbar-actions-20 > :nth-child(1) > div > :nth-child(2) > .MuiButtonBase-root'
    ).click()
    cy.get(
      ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    ).type('Erick Jorge')
    cy.get(
      ':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    ).type('adasdaas@teste.com')
    cy.get(
      ':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    ).type('asdad')
    cy.get(
      '.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root'
    ).click()
    cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get('[title="Salvar"]').click()
    cy.get('.react-toast-notifications__toast__content').should(
      'contain',
      'Sucesso!'
    )
    cy.get('[value="Erick Jorge"]').should('contain', 'Erick ')
  })

  // it('Should execute feature search ', () => {
  //   cy.get(
  //     '.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  //   ).type('erick')
  // })
})

describe('delete dialog spec', () => {
  it('modal should be dismissed', () => {
    cy.get('#btn-cancel-delete').click()
    cy.get('#delete-dialog').should('be.hidden')    
  })

  it('expense should be deleted', () => {
    cy.get('#btn-confirm-delete').click()
    cy.get('#delete-dialog').should('be.hidden')
    
  })
  
})
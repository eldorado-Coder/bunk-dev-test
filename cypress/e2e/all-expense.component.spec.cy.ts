describe('list expenses spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("should get expense data", function(){
    cy.request({
        method : 'GET',
        url : 'http://localhost:3000/expenses',
    }).then((res)=>{
        expect(res.status).to.eql(200)
    })
 })

  it('should go to add-expense page', () => {
    cy.get('#btn-add').click()
    cy.url().should('eq', 'http://localhost:4200/add-expense')
  })

  
  it('should go to edit-expense page', () => {
    cy.get('#btn-edit').click()
    cy.url().should('contains', 'http://localhost:4200/edit-expense')
  })

  
  it('should open up delete', () => {
    cy.get('#btn-delete').click()
    cy.get('#delete-dialog').should('be.visible')
  })
})  
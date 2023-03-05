describe('add expense spec', () => {
  beforeEach(() => {
    cy.visit('/add-expense')
  })
  it('should add expense data', () => {
    cy.get('input#input-name').type('Adriana')
    cy.get('input#input-amount').type('250')
    cy.get('button#btn-create').click()
    cy.request({
        method : 'POST',
        url : 'http://localhost:3000/expenses',
        body: {
              "name":"Adriana",
              "amount":250
        }
    }).then((res)=>{
        expect(res.status).to.eql(200)
        cy.url().should('eq', 'http://localhost:4200/')
    }) 
  })

  
})
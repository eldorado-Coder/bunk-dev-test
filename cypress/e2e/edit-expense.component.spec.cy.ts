describe('edit expense e2e spec', () => {
  it('should go to add-expense page', () => {
    cy.get('input#input-name').type('Adriana')
    cy.get('input#input-amount').type('250')
    cy.get('button#btn-update').click()
    cy.request({
        method : 'POST',
        url : 'http://localhost:3000/expenses/rAMLDrl73hqiMB6KR7_Kj',
        body: {
              "name":"Adriana",
              "amount":250
        }
    }).then((res)=>{
        expect(res.status).to.eql(200)
    })
  })
})
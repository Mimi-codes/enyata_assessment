//CHECKOUT JOURNEY

describe('Checkout Journey', () => {
    it('Checkout with valid details', () => {
      cy.validCheckout()
    })
  
    it('Checkout with blank data', () => {
      cy.blankData()
    })

    it('Cancel checkout', () => {
        cy.cancelCheckout()
      })
     
  })
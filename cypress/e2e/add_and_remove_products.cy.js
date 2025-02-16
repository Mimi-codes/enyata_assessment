//ADD AND REMOVE JOURNEY

describe('Add and Remove Journey', () => {
    it('Add to cart', () => {
      cy.addToCart()
    })
  
    it('Remove from Cart', () => {
      cy.removeFromCart()
    })
  })
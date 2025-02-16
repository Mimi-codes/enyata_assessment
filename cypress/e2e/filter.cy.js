//LOGIN JOURNEY

describe('Filter Journey', () => {
    it('Low to High', () => {
        cy.lowToHigh()
      })
      
      it('Z to A', () => {
        cy.zToA()
      })

      it('High to Low', () => {
        cy.highToLow()
      })

      it('A to Z', () => {
        cy.aToZ()
      })
  })
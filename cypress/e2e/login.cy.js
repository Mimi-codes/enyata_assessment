//LOGIN JOURNEY

describe('Login Journey', () => {
  it('Standard User', () => {
    cy.standardUser()
  })

  it('Problem User', () => {
    cy.problemUser()
  })
  it('Incorrect Username', () => {
    cy.incorrectUsername()
  })

  it('Incorrect Password', () => {
    cy.incorrectPassword()
  })

  it('Incorrect Details', () => {
    cy.incorrectDetails()
  })
  it('Blank Fields', () => {
    cy.blankFields()
  })
  it('Blank Username', () => {
    cy.blankUsername()
  })
  it('Blank Password', () => {
    cy.blankPassword()
  })
   
})
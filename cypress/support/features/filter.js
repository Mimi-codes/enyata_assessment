let data;
const dropdownValues= ['az', 'za', 'lohi', 'hilo']

before('', () => {
    cy.fixture('filter.json').then((elem) => {
        data = elem
    })
})

//valid login (standard user)
Cypress.Commands.add('aToZ', () => {
   cy.standardUser()
    cy.seePage(data.products_page_veri, data.products_page_val)
    cy.selectDropdown(data.filter_icon, dropdownValues[0])
    cy.verifyNameSorting(data.item_name, 'asc');

})


Cypress.Commands.add('zToA', () => {
    cy.standardUser()
     cy.seePage(data.products_page_veri, data.products_page_val)
     cy.selectDropdown(data.filter_icon, dropdownValues[1])
     cy.verifyNameSorting(data.item_name, 'desc');

 })

 Cypress.Commands.add('lowToHigh', () => {
    cy.standardUser()
     cy.seePage(data.products_page_veri, data.products_page_val)
     cy.selectDropdown(data.filter_icon, dropdownValues[2])
     cy.verifyPriceSorting(data.item_price, 'asc');
 })

 Cypress.Commands.add('highToLow', () => {
    cy.standardUser()
     cy.seePage(data.products_page_veri, data.products_page_val)
     cy.selectDropdown(data.filter_icon, dropdownValues[3])
     cy.verifyPriceSorting(data.item_price, 'desc');

 })
let data;

before("", () => {
  cy.fixture("add_and_remove.json").then((elem) => {
    data = elem;
  });
});

Cypress.Commands.add("addToCart", () => {
  cy.standardUser();
  cy.clickFirstItem(data.product_name_field);
  cy.clickElement(data.add_to_cart_btn);
});

Cypress.Commands.add("removeFromCart", () => {
  cy.standardUser();
  cy.clickElement(data.product_name_field);
  cy.clickElement(data.add_to_cart_btn);
});

// Cypress.Commands.add('addAndRemoveProduct', () => {
//     cy.toggleProdStatus(

//     )
// })

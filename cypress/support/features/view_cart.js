let data;

before("", () => {
  cy.fixture("view_cart.json").then((elem) => {
    data = elem;
  });
});

Cypress.Commands.add("loadCartPage", () => {
  cy.standardUser();
  cy.clickElement(data.cart_link);
  cy.verifyCartPage(); // Verify the cart page URL
  cy.verifyPage(data.cart_list);
  // Ensure cart items list is visible
});

Cypress.Commands.add("addAndVerifyProduct", () => {
  cy.addToCart();
  cy.checkLength(data.cart_item, 0); // Ensure one item is in the cart
});

Cypress.Commands.add("checkCartStatus", () => {
  cy.validCheckout();
  // Go back to cart and verify it's empty
  cy.clickElement(data.cart_link);
  cy.checkEmptyState(data.cart_list, data.cart_item); // Ensure cart is empty
});

Cypress.Commands.add("cartPersistence", () => {
  cy.addAndVerifyProduct();

  // Logout
  cy.clickElement(data.hamburger_btn);
  cy.clickElement(data.logout_btn);
  // Log in again
  cy.standardUser();
  // Navigate to cart again and verify product is still there
  cy.clickElement(data.cart_link);
  cy.verifyCartPage();
  cy.checkLength(data.cart_item, 1); // Cart should retain item
});

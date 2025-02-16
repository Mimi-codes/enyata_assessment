//VIEW CART JOURNEY

describe("View Cart Journey", () => {
  it("Load cart page", () => {
    cy.loadCartPage();
  });

  it("Add and verify product in the cart", () => {
    cy.addAndVerifyProduct();
  });

  it("Check cart status", () => {
    cy.checkCartStatus();
  });

  it("Cart data persistence after logout", () => {
    cy.cartPersistence();
  });
});

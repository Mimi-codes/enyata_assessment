const { faker } = require("@faker-js/faker");

faker;
let data;

before("", () => {
  cy.fixture("checkout.json").then((elem) => {
    data = elem;
  });
});

Cypress.Commands.add("validCheckout", () => {
  cy.standardUser();
  cy.clickElement(data.cart_icon);
  cy.clickElement(data.checkout_btn);
  cy.typeInTextField(data.first_name_field, faker.person.firstName());
  cy.typeInTextField(data.last_name_field, faker.person.lastName());
  cy.typeInTextField(data.postal_code_field, faker.phone.number("######"));
  cy.clickElement(data.continue_btn);
  cy.seePage(data.overview_page, data.overview_page_val);
  cy.clickElement(data.finish_btn);
  cy.seePage(data.success_page, data.success_mssg);
});

Cypress.Commands.add("blankData", () => {
  cy.standardUser();
  cy.clickElement(data.cart_icon);
  cy.clickElement(data.checkout_btn);
  cy.clickElement(data.continue_btn);
  cy.seePage(data.error_field, data.error_val);
});

Cypress.Commands.add("cancelCheckout", () => {
  cy.standardUser();
  cy.clickElement(data.cart_icon);
  cy.clickElement(data.checkout_btn);
  cy.clickElement(data.cancel_btn);
  cy.seePage(data.cart_page, data.cart_page_val);
});

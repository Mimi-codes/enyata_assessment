const { faker } = require("@faker-js/faker");

let data;

before('', () => {
    cy.fixture('login.json').then((elem) => {
        data = elem
    })
})

//valid login (standard user)
Cypress.Commands.add('standardUser', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field,data.standard_user)
    cy.typeInTextField(data.password_field, data.password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.products_page_veri, data.products_page_val)
})

Cypress.Commands.add('problemUser', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field,data.problem_user)
    cy.typeInTextField(data.password_field, data.password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.products_page_veri, data.products_page_val)
})

Cypress.Commands.add('incorrectDetails', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field, data.incorrect_username)
    cy.typeInTextField(data.password_field, data.incorrect_password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.incorrect_details_err)
})

Cypress.Commands.add('incorrectUsername', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field, data.incorrect_username)
    cy.typeInTextField(data.password_field, data.password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.incorrect_details_err)
})

Cypress.Commands.add('incorrectPassword', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field, data.problem_user)
    cy.typeInTextField(data.password_field, data.incorrect_password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.incorrect_details_err)
})

Cypress.Commands.add('blankFields', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.blank_username_err)
})

Cypress.Commands.add('blankUsername', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.password_field, data.password)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.blank_username_err)
})

Cypress.Commands.add('blankPassword', () => {
    cy.seePage(data.login_page_veri, data.login_page_val)
    cy.typeInTextField(data.username_field, data.standard_user)
    cy.clickElement(data.login_btn)
    cy.seePage(data.error_field, data.blank_password_err)
})
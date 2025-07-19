Cypress.Commands.add('login_e_produto', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
})

Cypress.Commands.add('erro_username_is_required', () => {
    cy.get('[data-test="login-button"]').click()
    cy.contains('h3', 'Epic sadface: Username is required')
})

Cypress.Commands.add('erro_password_is_required', (username) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="login-button"]').click()
    cy.contains('h3', 'Epic sadface: Password is required')
})

Cypress.Commands.add('user_nao_registrado', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.contains('h3', 'Epic sadface: Username and password do not match any user in this service')
})
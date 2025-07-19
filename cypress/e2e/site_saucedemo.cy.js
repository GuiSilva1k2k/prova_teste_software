describe('acessando site saucedemo', () => {
  beforeEach(() => {
      cy.visit('')
  })

  it('login com sucesso e clica em um produto', () => {
    cy.login_e_produto('standard_user', 'secret_sauce')
  })
  
  it('Error - Não informa Username e Password', () => {
    cy.erro_username_is_required()
  })

  it('Error - Não informa Password', () => {
    cy.erro_password_is_required('standard_user')
  })

  it('Erro - Informa Username e Password não existentes', () => {
    cy.user_nao_registrado('joao_frango', 'ta_dando_onda')
  })
})
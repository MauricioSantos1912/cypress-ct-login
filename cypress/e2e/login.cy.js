describe('template spec', () => {
  const selectorsList={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    wrongCredentialAlert:"[role='alert']"


  }

  it('ct_login__successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module')
  
  })
    it('ct_login__Failed', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get(selectorsList.usernameField).type('TESTE123')
     cy.get(selectorsList.passwordField).type('TESTE123')
     cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.wrongCredentialAlert)


  }) 
})
describe('template spec', () => {
  it('ct_login__successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module')
  
  })
    it('ct_login__Failed', () => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get("[name='username']").type('TESTE123')
     cy.get("[name='password']").type('TESTE123')
     cy.get("[type='submit']").click()
     cy.get('.oxd-alert')


  }) 
})
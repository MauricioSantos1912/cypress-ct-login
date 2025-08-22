import userData from '../fixtures/users/userData.json'

describe('template spec', () => {
  const selectorsList={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:"[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameFild:"[name='firstName']",
    middleNameFild :"[name='middleName']",
    lastNameFild:"[name='lastName']",
    genericFild:".oxd-input--active",
    dateFild:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    submitButton:"[type='submit']"
  }


  it.only('User Info Updat - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameFild).clear().type("NameTeste")
    cy.get(selectorsList.middleNameFild).clear().type("MiddleTeste")
    cy.get(selectorsList.lastNameFild).clear().type("LastTeste")
    cy.get(selectorsList.genericFild).eq(3).clear().type("EmployeeId")
    cy.get(selectorsList.genericFild).eq(4).clear().type("OtherIdTeste")
    cy.get(selectorsList.genericFild).eq(5).clear().type("DriverTeste")
    cy.get(selectorsList.dateFild).eq(0).clear().type("1995-07-03")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-content')
    
      
    
  
  })
    it('ct_login__Fail', () => {
     cy.visit('/auth/login')
     cy.get(selectorsList.usernameField).type(userData.userFail.username)
     cy.get(selectorsList.passwordField).type(userData.userFail.password)
     cy.get(selectorsList.loginButton).click()
     cy.get(selectorsList.wrongCredentialAlert)


  }) 
})
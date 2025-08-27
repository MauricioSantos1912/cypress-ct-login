class MyInfoPage {

    selectorsList(){
        const selectors = {
            firstNameFild:"[name='firstName']",
            middleNameFild :"[name='middleName']",
            lastNameFild:"[name='lastName']",
            genericFild:".oxd-input--active",
            dateFild:"[placeholder='yyyy-dd-mm']",
            dateCloseButton:".--close",
            submitButton:"[type='submit']",
            selectNationality: ".oxd-select-text--arrow"
           

        }

        return selectors
        
    }

    fillPersonalDatails(FirstName,MiddleName,LastName){
        cy.get(this.selectorsList().firstNameFild).clear().type(FirstName)
        cy.get(this.selectorsList().middleNameFild).clear().type(MiddleName)
        cy.get(this.selectorsList().lastNameFild).clear().type(LastName)
        
    }

    fillEmployeeDetails(employeeId,otherId,driversLicenseDate,driversExpiry){
        cy.get(this.selectorsList().genericFild).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericFild).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericFild).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateFild).eq(0).clear().type(driversExpiry)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectNationality).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(27)').click()

    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('.oxd-toast-content')


    }

    fillStatus(){
        
    }
}

export default MyInfoPage

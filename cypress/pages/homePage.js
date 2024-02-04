export class HomePage {
    
    get btnLogout() {
        return cy.contains('button','Log out')
    }
    get btnMenu() {
        return cy.get('button#open-navigation-menu-mobile')
    }

    clickMenu() {
        this.btnMenu.click()
    }
    clickLogout() {
        this.btnLogout.click()
    }
    logout() {
        this.clickMenu()
        this.clickLogout()
    }
}

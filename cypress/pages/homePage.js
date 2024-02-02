export class HomePage {
    get logIn() {
        return cy.contains('button','Log in')

    }
    get logOut() {
        return cy.contains('button','Log out')

    }
    get openMenu() {
        return cy.get('button#open-navigation-menu-mobile')

    }
}

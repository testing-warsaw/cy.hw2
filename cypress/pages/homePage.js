export class HomePage {
    get logInButton() {
        return cy.contains('button','Log in')

    }
    get logOutButton() {
        return cy.contains('button','Log out')

    }
    get openMenu() {
        return cy.get('button#open-navigation-menu-mobile')

    }
}

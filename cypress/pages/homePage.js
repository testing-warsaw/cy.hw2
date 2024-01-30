export class Navigation {
    get logInButton() {
        return cy.contains('button','Log in')

    }
    get logOutButton() {
        return cy.contains('button','Log out')

    }
    get hamburgerMenu() {
        return cy.get('button#open-navigation-menu-mobile')

    }
}

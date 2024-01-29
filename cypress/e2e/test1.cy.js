/// <reference types="Cypress" />

describe("Test 1-(Log in/out)", () => {

    it("Log in, Log out user", () => {

      cy.visit("https://www.edu.goit.global/account/login");
      
      cy.get("#user_email").type("user888@gmail.com");
      cy.get("#user_password").type("1234567890");
      
      cy.contains('button','Log in').click()

      cy.get('button#open-navigation-menu-mobile').click()

      cy.contains('button','Log out').click()

    });
  });
      
   

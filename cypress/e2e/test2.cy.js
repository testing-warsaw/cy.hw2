/// <reference types="Cypress" />

describe("Test 2-(Log in/out)", () => {

    it("Log in, and Log out user", () => {

      cy.visit("https://www.edu.goit.global/account/login");
      
      cy.get("#user_email").type("testowyqa@qa.team");
      cy.get("#user_password").type("QA!automation-1");

      cy.contains('button','Log in').click()

      cy.get('button#open-navigation-menu-mobile.next-7afvtf.e1phyiqy6').click()
      
      cy.contains('button','Log out').click()
     
    });
  });
      

      




      
      
   

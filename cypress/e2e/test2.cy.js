/// <reference types="Cypress" />

import { GoitPage } from "../pages/loginPage";
import { Navigation } from "../pages/homePage";

const navigate = new Navigation()
const goitPage = new GoitPage()

describe("Test 2-(Log in/out)", () => {

    it("LogIn, LogOut user 2", () => {

      goitPage.openLoginPage()
      cy.login("testowyqa@qa.team","QA!automation-1")

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()
      
      navigate.logOutButton.click()
     
    });
  });

      

      




      
      
   

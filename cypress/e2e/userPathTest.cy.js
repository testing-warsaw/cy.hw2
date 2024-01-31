/// <reference types="Cypress" />

import{Navigation} from "../pages/homePage";
import { GoitPage } from "../pages/loginPage";

const navigate = new Navigation()
const goitPage = new GoitPage()

describe("Test Log in/out)", () => {

    it("User 1 Path log(in/out)", () => {

      goitPage.openLoginPage()
      cy.login("user888@gmail.com","1234567890")

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()

      navigate.logOutButton.click()

    });

    it("User 2 Path log(in/out)", () => {

      goitPage.openLoginPage()
      cy.login("testowyqa@qa.team","QA!automation-1")

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()
      
      navigate.logOutButton.click()
     
    });
  });
    


      


      

      
   

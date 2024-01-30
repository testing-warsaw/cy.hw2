/// <reference types="Cypress" />

import{Navigation} from "../pages/homePage";
import { GoitPage } from "../pages/loginPage";

const navigate = new Navigation()
const goitPage = new GoitPage()

describe("Test 1-(Log in/out)", () => {

    it("LogIn, LogOut user 1", () => {

      goitPage.openLoginPage()
      cy.login("user888@gmail.com","1234567890")

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()

      navigate.logOutButton.click()

    });
  });
    


      


      

      
   

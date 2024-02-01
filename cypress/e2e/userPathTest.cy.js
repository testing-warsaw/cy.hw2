/// <reference types="Cypress" />

import{Navigation} from "../pages/homePage";
import { GoitPage, userData } from "../pages/loginPage";


const navigate = new Navigation()
const goitPage = new GoitPage()
const user = new userData

describe("Test Log in/out)", () => {

    it("User 1 Path log(in/out)", () => {

      goitPage.openLoginPage()

      cy.login(user.login1, user.password1)

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()

      navigate.logOutButton.click()

    });

    it("User 2 Path log(in/out)", () => {

      goitPage.openLoginPage()
      
      cy.login(user.login2, user.password2)

      navigate.logInButton.click()

      navigate.hamburgerMenu.click()
      
      navigate.logOutButton.click()
     
    });
  });
    


      


      

      
   

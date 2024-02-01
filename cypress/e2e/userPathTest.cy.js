/// <reference types="Cypress" />

import{HomePage} from "../pages/homePage";
import { LoginPage, userData } from "../pages/loginPage";


const navigate = new HomePage()
const goitPage = new LoginPage()
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
    


      


      

      
   

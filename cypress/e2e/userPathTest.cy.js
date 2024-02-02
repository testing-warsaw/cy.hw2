/// <reference types="Cypress" />

import{HomePage} from "../pages/homePage";
import { LoginPage, userData } from "../pages/loginPage";


const homePage = new HomePage()
const loginPage = new LoginPage()


describe("Test Log in/out)", () => {

    it("User 1 Path log(in/out)", () => {

      loginPage.openLoginPage()

      loginPage.loginUser1()

      homePage.logInButton.click()

      homePage.hamburgerMenu.click()

      homePage.logOutButton.click()

    });

    it("User 2 Path log(in/out)", () => {

      loginPage.openLoginPage()

      loginPage.loginUser2()

      homePage.logInButton.click()

      homePage.hamburgerMenu.click()
      
      homePage.logOutButton.click()
     
    });
  });
    


      


      

      
   

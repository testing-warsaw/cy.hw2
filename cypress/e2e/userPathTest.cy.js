/// <reference types="Cypress" />

import{HomePage} from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";


const homePage = new HomePage()
const loginPage = new LoginPage()


describe("Test Log in/out)", () => {

    it("User 1 Path log(in/out)", () => {

      loginPage.openLoginPage()

      loginPage.loginUser1()

      homePage.logIn.click()

      homePage.openMenu.click()

      homePage.logOut.click()

    });

    it("User 2 Path log(in/out)", () => {

      loginPage.openLoginPage()

      loginPage.loginUser2()

      homePage.logIn.click()

      homePage.openMenu.click()
      
      homePage.logOut.click()
     
    });
  });
    


      


      

      
   

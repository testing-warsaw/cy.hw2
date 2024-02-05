/// <reference types="Cypress" />

import{HomePage} from "../../pages/homePage";
import { LoginPage } from "../../pages/loginPage";


const homePage = new HomePage()
const loginPage = new LoginPage()


describe("Test Log in/out)", () => {

    it("User 1 Path log(in/out)", () => {

      loginPage.login("user888@gmail.com", "1234567890")
      homePage.logout()

    });

    it("User 2 Path log(in/out)", () => {

    loginPage.login("testowyqa@qa.team", "QA!automation-1")
      homePage.logout()
     
    });
  });
    


      


      

      
   

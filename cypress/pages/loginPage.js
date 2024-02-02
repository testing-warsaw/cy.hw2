export class LoginPage {

    openLoginPage() {
      cy.visit("https://www.edu.goit.global/account/login");
    }

    loginUser1() {
      cy.login("user888@gmail.com", "1234567890")
    }

    loginUser2() {
      cy.login("testowyqa@qa.team", "QA!automation-1")
    }

      }











  
  
  
  
    





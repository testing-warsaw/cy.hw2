export class LoginPage {

    openLoginPage() {
      cy.visit("https://www.edu.goit.global/account/login");
    }

    inputEmail(login) {
      cy.get("#user_email").type(login)
    }

    inputPassword(password) {
      cy.get("#user_password").type(password)
    }

    get btnLogin() {
      return cy.contains('button','Log in')
  }

  clickLogin() {
    this.btnLogin.click()
}

    login(login, password) {
      this.openLoginPage()
      this.inputEmail(login)
      this.inputPassword(password)
      this.clickLogin()
      
    }
    
  }
  
  
  











  
  
  
  
    





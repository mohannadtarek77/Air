/**********************************************************************************************************************
 * This file contains the Test Cases of the Login Page
 ***********************************************************************************************************************/
import PageInteractions from "../../utilities/page-interactions.js";
//import Utilities from '../../utilities/utilities.js';

let page = new PageInteractions();

describe("Test Cases for the Login Page", function() {
  beforeEach(function() {
    cy.fixture("loginPage.json").as("loginData");
    // converting the login's json file to  an alias
    cy.get("@loginData").then(() => {
      // getting the alias to use it
      cy.visit(this.loginData.url);
      //visiting the url
    });
  });

  it("User Logs In with Invalid UserName and Password", function() {
    page.writeTxt(
      this.loginData.username.selector,
      this.loginData.username.name
    );
    //typing the username
    page.writeTxt(
      this.loginData.password.selector,
      this.loginData.password.passwordValue
    );
    //typing the password
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with Invalid Email and Password", function() {
    page.emailGen(this.loginData.username.selector);
    //typing the email
    page.passwordGen(this.loginData.password.selector);
    //typing the password
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with Empty Credentials", function() {
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with UserName only", function() {
    page.nameGen(this.loginData.password.selector);
    //typing the username
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with Password only", function() {
    page.passwordGen(this.loginData.password.selector);
    //typing the password
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with an Email only", function() {
    page.emailGen(this.loginData.username.selector);
    //typing the email
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with an Invalid Password format", function() {
    page.nameGen(this.loginData.username.selector);
    //typing the username
    page.nameGen(this.loginData.loginButton);
    //typing the username in the password field as a wrong format for the password
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });

  it("User Logs In with an Invalid UserName format", function() {
    page.numberGen(this.loginData.username.selector);
    //typing a number in the username field as a wrong format for the username
    page.passwordGen(this.loginData.password.selector);
    //typing the password
    page.clickBtn(this.loginData.loginButton);
    //clicking on the login button
    page.isTxtVisible(this.loginData.wrongCredentialsValidation);
    //asserting on the validation message
  });
});

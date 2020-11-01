/**********************************************************************************************************************
 * This file is used to interact with any page element
 *
 * It contains all needed methods to interact with a web page {getElem, click, writeOnElem, readElem..etc}
 ***********************************************************************************************************************/

/**
 * This is Page interactions class
 *
 * It contains all needed functions to interact with page view {}
 */
class PageInteractions {
  /**
   * This is the method to get page field element so that you can do actions on it
   * @return {element} page field element
   */
  getElem(selector) {
    return cy.get(selector);
  }

  /* A method to return a text inside a specific selecor*/
  getText(selector, text) {
    return this.getElem(selector).contains(text);
  }

  /**
   * This is the method to click on a text
   * force could be replaced with {force:true} if needed
   */
  clickText(selector, text, force) {
    this.getText(selector, text).click(force);
  }

  /**
   * This is the method to click on a button
   * force could be replaced with {force:true} if needed
   */
  clickBtn(selector, force) {
    this.getElem(selector).click(force, true);
  }
  /**
   * This is the method to click on a field
   * force could be replaced with {force:true} if needed
   */
  clickField(selector, force) {
    this.getElem(selector).click(force);
  }
  /**
   * This is the method to click on a link
   * force could be replaced with {force:true} if needed
   */
  clickLink(selector, force) {
    this.getElem(selector).click(force);
  }

  /**
   * This is the method to write txt
   * force could be replaced with {force:true} if needed
   */
  writeTxt(selector, text, force) {
    this.getElem(selector).type(text, force);
  }

  /**
   * This is the method to clear txt
   * force could be replaced with {force:true} if needed
   */
  clearTxt(selector, force) {
    this.getElem(selector).clear(force);
  }
  /**
   * Method to  generate random password
   * @param  selector Selector where to select the element
   * @param  text to generate the password at the element
   * Commonly used to randomly generate an password
   * */
  passwordGen(selector, text) {
    text = "";
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_@!#$%^&*()_+=-/.,}{<>"":;~`|?';

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    cy.get(selector).type(text);

    return text;
  }
  /**
 * Method to  generate random email 
 * @param  selector Selector where to select the element
 * @param  text to generate the email at the element

 * Commonly used to randomly generate an e-mail
 * */

  emailGen(selector, text) {
    var strValues = "abcdefg12345";
    var text = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      text = text + strTmp;
    }
    strTmp = "";
    text = text + "@";
    for (var j = 0; j < 8; j++) {
      strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
      text = text + strTmp;
    }
    text = text + ".com";
    cy.get(selector).type(text);
    return text;
  }

  // * Method to assert that a text is visible in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */
  isTxtVisible(selector, text) {
    cy.contains(selector, text).should("be.visible");
  }

  // * Method to assert that a text is not visible in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */

  txtNotVisible(selector, text) {
    cy.contains(selector, text).should("not.be.visible");
  }

  // * Method to assert that a button is not visible in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */

  btnNotVisible(selector) {
    return this.getElem(selector).should("not.be.visible");
  }

  // * Method to assert that a textfield is enabled in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */
  enable(selector) {
    return this.getElem(selector).should("be.enabled");
  }

  // * Method to assert that a textfield is disabled in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */
  disable(selector) {
    return this.getElem(selector).should("be.disabled");
  }
  // * Method to assert that a button is not visible in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */
  btnIsVisible(selector) {
    return this.getElem(selector).should("be.visible");
  }
  // * Method to assert that a button is visible in a certain element
  // * @param  selector The selector of the element.
  // * @param  text The text to assert on.
  // */

  /* clicks on a drop-down using its selector and choose an option using it's selector and text
    selector is the selector of the dropdown to click on
    text is the text of the option you're choosing
    optSelector is the selector of the option you see (mat-option,mat-select etc...)
    force could be replaced with {force:true} if needed*/

  /**
   * This is the method is used to select item from dropdown list
   * @param {string} selector - this is the selector of dropdown icon
   * @param {string} optSelector - this is the selector of dropdown needed option
   * @param {string} text - this is the name of needed option
   * @param {string} force - this is used incase option isn`t displayed to force click`
   */
  dropDown(selector, optSelector, text, force) {
    this.getElem(selector).click(force);
    this.getText(optSelector, text).click(force);
  }

  /* A method to assert for an element text with three conditions depending
  on the assertion needed

  for example :       page.assert("h1","Welcome back!","be.visible")
  for example :       page.assert("h1","submit","be.disabled")*/

  assert(selector, text, assert1, assert2, assert3) {
    this.getText(selector, text).should(assert1, assert2, assert3);
  }

  /* upload function which takes three arguments
    -the file path itself
    -the file mime according to it's type (pdf,jpg etc..)
    -the selector where you are going to upload

    before using the below function you need to run

    -  npm install --save-dev cypress-file-upload

    in your project directory then

    -  import 'cypress-file-upload';

    in your project's cypress/support/commands.js file*/
  upload(file, mime, selector) {
    cy.fixture(file, "base64").then((fileContent) => {
      cy.get(selector).upload(
        {
          fileContent,
          fileName: file,
          mimeType: mime,
          encoding: "base64",
        },
        {
          uploadType: "drag-n-drop",
        }
      );
    });
  }

  /**
   * Method to  generate random email
   * @param  selector Selector where to select the element
   * @param  text to generate the letters of the name at the element
   * Commonly used to randomly generate an e-mail
   * */
  nameGen(selector, text) {
    text = "";
    cy.get(selector)
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    cy.get(selector).type(text);
    return text;
  }

  /**
   * Method to  generate random email
   * @param  selector Selector where to select the element
   * @param  text to generate the numbers at the element
   * Commonly used to randomly generate an e-mail
   * */
  numberGen(selector, text) {
    var text = "";
    var possible = "1234567890";
    for (var i = 0; i < 11; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    cy.get(selector).type(text);

    return text;
  }
}
export default PageInteractions;

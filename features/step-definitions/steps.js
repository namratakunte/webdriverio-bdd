import { Given, When, Then } from '@wdio/cucumber-framework';

import registerCheckout from '../pageobjects/registerCheckout';
import SecurePage from '../pageobjects/secure.page';
    
const pages = {
    login: registerCheckout
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I register with (.*)$/, async (email) => {
    await registerCheckout.clickSignIn()
    await registerCheckout.enteremail(email)
});


Then('I enter personal information title {string} firstname {string} lastName {string} email {string} password {string}', async (title,firstName,lastName,email,password) => {
    await registerCheckout.setTitle(title)
    await registerCheckout.enterFirstname(firstName)
    await registerCheckout.enterLastname(lastName)
    await registerCheckout.enteremail2(email)
    await registerCheckout.setpassword(password)

    
});
 

When('i enter personal information DOB {string} months {string} years {string}', async (days,months,years)=> {
    await registerCheckout.setdate(days,months,years)
});


Then('I enter address detail {string} lastname {string} company {string} address {string} city {string}', async (firstName,lastName,company,address,city) => {
    await registerCheckout.enteraddressFirstname(firstName)
    await registerCheckout.enteraddressLastname(lastName)
    await registerCheckout.enteraddresscomapny(company)
    await registerCheckout.enteraddress(address)
    await registerCheckout.enteraddresscity(city)

});

When('I select state {string} postalcode {string} mobilenumber {string} myaddress {string}', async (state,postalcode,mobilenumber,myaddress) => {
    await registerCheckout.setState(state)
    await registerCheckout.addresszipcode(postalcode)
    await registerCheckout.addressmono(mobilenumber)
    await registerCheckout.addmyaddress(myaddress)

});

Then(/^I click on register button$/, async () => {
    await registerCheckout.clickonregister()
});

Then(/^I sign out from application$/, async () => {
    await registerCheckout.signout()
});

Then('I validate correct {string} lastname {string} is displayed', async (firstName,lastName) => {
    await registerCheckout.validateFirstnameLastname(firstName,lastName)
});

Then(/I click on sign in link$/, async () => {
    await registerCheckout.clickSignIn()

});

When('I Login with {string} and {string}', async (email,password) => {
    await registerCheckout.enteremailAndPassword(email,password)
});

Then(/^I add product to cart$/, async () => {
    await registerCheckout.addProductToCart()
});

Then('I checkout till payment', async () => {
    await registerCheckout.checkoutproduct()
});
     
Then('I validate product details {string}', async (ProductName) => {
    await registerCheckout.ValidateProductName(ProductName)
});
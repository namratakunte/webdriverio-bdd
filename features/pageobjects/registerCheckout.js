import Page from './page';
import { expect as chaiExpect } from 'chai';
import { from } from 'responselike';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class registerCheckout extends Page {
    /**
     * define selectors using getter methods
     */
    get sighinlink() { return $('a.login') }
    get inputEmail() { return $('#email_create') }
    get btnRegister() { return $('#SubmitCreate') }
    get titleMRRadio() { return $('#id_gender1') }
    get titleMRSRadio() { return $('#id_gender2') }
    get textfieldfirstname() { return $('#customer_firstname') }
    get textfieldlastname() { return $('#customer_lastname') }
    get inputEmail2() { return $('#email') }
    get password() { return $('#passwd') }
    get daysdropdown() { return $('#days') }
    get monthsdropdown() { return $('#months') }
    get yearsdropdown() { return $('#years') }
    get addressfieldfirstname() { return $('#firstname') }
    get addressfieldlastname() { return $('#lastname') }
    get addressfieldcompany() { return $('#company') }
    get addressfieldAddress() { return $('#address1') }
    get addresscity() { return $('#city') }
    get addressState() { return $('#id_state') }
    get addresspostalcode() { return $('#postcode') }
    get addressmobileno() { return $('#phone_mobile') }
    get myaddress() { return $('#alias') }
    get registerbutton() { return $('#submitAccount') }
    get registeraccountname() { return $('.account') }
    get signoutlink() { return $('.logout') }
    get inputEmailLogin() { return $('#email') }
    get inputPasswordLogin() { return $('#passwd') }
    get buttonLogin() { return $('#SubmitLogin') }
    get womenLink() { return $('//a[@title="Women"]') }
    get product1link() { return $('//h5/a[@title="Faded Short Sleeve T-shirts"]') }
    get buttonAddToCart() { return $('#add_to_cart button') }
    get buttonCheckout() { return $('//a[@class="btn btn-default button button-medium"]') }
    get buttonCheckout2() { return $('//a[@class="button btn btn-default standard-checkout button-medium"]') }
    get buttonCheckoutaddress() { return $('//button[@name="processAddress"]') }
    get buttoncheckbox() { return $('#cgv') }
    get buttoncheckoutprocesscarrier() { return $('//button[@name="processCarrier"]') }
    get productname() { return $('//button[@name="p.product-name "]') }




    async clickSignIn() {
        await this.sighinlink.click();
        await browser.pause(10000);
    }

    async enteremail(email) {
        await this.inputEmail.setValue(email);
        await browser.pause(10000);
        await this.btnRegister.click();
        await browser.pause(10000);
        //  .
    }

    async setTitle(title) {
        if (title == "MR") {
            await this.titleMRRadio.click();
        }
        else {
            await this.titleMRSRadio.click();
        }
        await browser.pause(5000);
    }

    async enterFirstname(Firstname) {
        await this.textfieldfirstname.setValue(Firstname)
        await browser.pause(2000);
    }

    async enterLastname(Lastname) {
        await this.textfieldlastname.setValue(Lastname)
        await browser.pause(2000);
    }

    async enteremail2(email) {
        await this.inputEmail2.setValue(email);
        await browser.pause(2000);

    }

    async setpassword(password) {
        await this.password.setValue(password);
        await browser.pause(2000);

    }

    async setdate(days, month, year) {
        await this.daysdropdown.selectByAttribute('value', days);
        await browser.pause(2000);
        await this.monthsdropdown.selectByAttribute('value', month);
        await browser.pause(2000);
        await this.yearsdropdown.selectByAttribute('value', year);
        await browser.pause(2000);

    }

    async enteraddressFirstname(Firstname) {
        await this.addressfieldfirstname.setValue(Firstname)
        await browser.pause(2000);
    }

    async enteraddressLastname(Lastname) {
        await this.addressfieldlastname.setValue(Lastname)
        await browser.pause(2000);
    }

    async enteraddresscomapny(company) {
        await this.addressfieldcompany.setValue(company)
        await browser.pause(2000);
    }

    async enteraddress(address) {
        await this.addressfieldAddress.setValue(address)
        await browser.pause(2000);
    }

    async enteraddresscity(city) {
        await this.addresscity.setValue(city)
        await browser.pause(2000);
    }

    async setState(state) {
        await this.addressState.selectByAttribute('value', state);
        await browser.pause(2000);
    }

    async addresszipcode(postalcode) {
        await this.addresspostalcode.setValue(postalcode);
        await browser.pause(2000);
    }

    async addressmono(mobilenumber) {
        await this.addressmobileno.setValue(mobilenumber);
        await browser.pause(2000);
    }

    async addmyaddress(myaddress) {
        await this.myaddress.setValue(myaddress);
        await browser.pause(2000);
    }

    async clickonregister() {
        await this.registerbutton.click();
        await browser.pause(10000);
    }

    async validateFirstnameLastname(Firstname, Lastname) {
        const loginname = await this.registeraccountname.getText()
        console.log(await this.registeraccountname.getText())
        const elem = $('.account')
        chaiExpect(loginname).to.include(Firstname)
        chaiExpect(loginname).to.include(Lastname)
    }

    async signout() {
        await this.signoutlink.click();
        await browser.pause(10000);
    }

    async enteremailAndPassword(email, password) {
        await this.inputEmailLogin.setValue(email);
        await browser.pause(3000);
        await this.inputPasswordLogin.setValue(password);
        await browser.pause(3000);
        await this.buttonLogin.click();
        await browser.pause(10000);

    }

    async addProductToCart() {
        await this.womenLink.click();
        await browser.pause(5000);
        await this.product1link.click();
        await browser.pause(15000);
        await this.buttonAddToCart.click();
        await browser.pause(15000);

    }

    async ValidateProductName(ProductName) {
        await browser.pause(10000);
        await this.buttoncheckbox.click();
        await browser.pause(5000);
        await this.buttoncheckoutprocesscarrier.click();
        await browser.pause(10000);
        const elem1 = $('p.product-name a');

        const product = await elem1.getText();
        chaiExpect(product).to.include(ProductName)
    }

    async checkoutproduct() {
        await this.buttonCheckout.click();
        await browser.pause(8000);
        await this.buttonCheckout2.click();
        await browser.pause(15000);
        await this.buttonCheckoutaddress.click();
        await browser.pause(15000);
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new registerCheckout();

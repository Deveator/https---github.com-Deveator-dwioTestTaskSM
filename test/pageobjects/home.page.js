import Page from './page'

class HomePage extends Page{

    get contactUsButton () {
        return $('[href="#contact-us"]');
    }

    get  projectTypes() {
        return $('[class="cb-form__step cb-form__step-one"]');
    }

    get  contactForm() {
        return $('[class="cb-form__step cb-form__step-three"]');
    }

    get  sendRequestButton() {
        return $('[class="cb-form__submit"]');
    }

    get  webProjectItem() {
        return $('[class="platforms__item-inner platforms__item-inner_web"]');
    }

    get  nameString() {
        return $('#name');
    }

    get  nameStringPrompt() {
        return $('[for="name"]');
    }

    get  emailString() {
        return $('#email');
    }

    get  emailStringPrompt() {
        return $('[for="email"]');
    }

    get  countryString() {
        return $('#country');
    }

    get  countryStringPrompt() {
        return $('[for="country"]');
    }

    get  contactString() {
        return $('#contact');
    }

    get  contactStringPrompt() {
        return $('[for="contact"]');
    }

    get  sendRequestButton() {
        return $('[class="cb-form__submit"]');
    }

    get  confirmMessage() {
        return $('#modal-confirm');
    }

    writeGName(){
        console.log(Page.gName);
    }


    open(){
        super.open('https://startmatter.com/');
    }

}

export default new HomePage();
import HomePage from '../pageobjects/home.page';
import resources from '../resources';
import { confirmPromptAndTypeValue, waitUntilBeVisible } from '../utilities/helper';

describe('startmatter.com contact form validation', () => {

    it('Navigate to https://startmatter.com/ and verify title', () => {
        HomePage.open();
        expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('Verify "CONTACT US" button is enable and click on "CONTACT US" button', () => {

        expect(HomePage.contactUsButton).toHaveText(resources.contactUsButtonName);
        HomePage.contactUsButton.click();
    });

    it('Verify scroll to contact form options', () => {

        waitUntilBeVisible(HomePage.projectTypes, 10000, resources.info1);
        waitUntilBeVisible(HomePage.contactForm, 10000, resources.info1);
    });

    it('Select WEB project type', () => {

        HomePage.webProjectItem.click();
    });

    it('Verify prompt for "Name" string and type name', () => {

        confirmPromptAndTypeValue(HomePage.nameStringPrompt, resources.nameStringPrompt, HomePage.nameString, resources.name);
    });

    it('Verify prompt for "Email" string and type email', () => {

        confirmPromptAndTypeValue(HomePage.emailStringPrompt, resources.emailStringPrompt, HomePage.emailString, resources.email);
    });

    it('Verify prompt for "Country" string and type country', () => {

        confirmPromptAndTypeValue(HomePage.countryStringPrompt, resources.countryStringPrompt, HomePage.countryString, resources.country);
    });

    it('Verify prompt for "Contact number" string and type contact number', () => {

        confirmPromptAndTypeValue(HomePage.contactStringPrompt, resources.contactStringPrompt, HomePage.contactString, resources.contact);
    });

    it('Click on "Send request" button', () => {

        HomePage.sendRequestButton.scrollIntoView();
        waitUntilBeVisible(HomePage.sendRequestButton, 20000, resources.info2);
        HomePage.sendRequestButton.click();
    });

    it('Verify confirm message', () => {

        waitUntilBeVisible(HomePage.confirmMessage, 20000, resources.info3);
        expect(HomePage.confirmMessage).toHaveTextContaining(resources.confirmMessage);
    });

})
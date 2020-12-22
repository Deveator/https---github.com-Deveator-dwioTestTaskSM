import HomePage from '../pageobjects/home.page';
import resources from '../resources';
import { confirmPromptAndTypeValue, waitUntilBeVisible } from '../utilities/helper';

describe('startmatter.com contact form validation', () => {

    it('Navigate to https://startmatter.com/ and verify title', () => {
        HomePage.open();
        expect(browser).toHaveTitle(resources.homeTitle);
    });
})
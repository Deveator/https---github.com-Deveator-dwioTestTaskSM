import HomePage from '../pageobjects/home.page';
import resources from '../resources';
import { confirmPromptAndTypeValue, waitUntilBeVisible } from '../utilities/helper';
var conf = require('../config/config-main');

describe('startmatter.com contact form validation', () => {

    it('Navigate to https://startmatter.com/ and verify title', () => {
        HomePage.open();
        expect(browser).toHaveTitle(resources.homeTitle);
    });

    it('Navigate to https://startmatter.com/ and verify title', () => {
        console.log(resources.klop);
        console.log('111');
        //  HomePage.open();
        //  expect(browser).toHaveTitle(resources.homeTitle);
    });


})
import StuffPage from '../pageobjects/stuff.page';

describe('Verify "Privacy Policy" button on "Settings" open and switch to new window with file', () => {

    it('Navigate to IndexPage and verify title', () => {
        browser.url('https://www.liveagent.de/kunden/');
        browser.pause(5000)
        StuffPage.acceptCoockiesButton.click();
        StuffPage.scrollToEveryEl();
        StuffPage.footer.scrollIntoView(0,0);
        browser.pause(5000)
        browser.setupInterceptor(); // capture ajax calls
        //browser.expectRequest(GET, url: string, statusCode: number)
        browser.expectRequest('GET', 'https://cdn.liveagent.com/app/uploads/2019/10/WebsupportSuccessStory_1-680x410.jpg', 300);
        browser.expectRequest('GET', 'https://cdn.liveagent.com/app/uploads/2019/10/WebsupportSuccessStory_1-680x410.jpg', 200);
       
        browser.getExpectations();
       // console.log(StuffPage.getEveryImgLinkList());
    });
/*
    it('Should click on "SignUp" button and navigate to registration page', () => {
        NavbarPage.signUpButton.click();
        verifyPageHeader(RegistrationPage.registrationPageHeader, resources.registrationPageHeader)
    });
*/
});
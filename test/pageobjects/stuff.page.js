import resources from '../resources'
import Page from './page'
import { waitUntilBeVisible } from '../utilities/helper';

class StuffPage extends Page {

    get pageHeader() {
        return $('div[class*="learn__header"]')
    }

    get categoryTitle() {
        return $$('.category__title')
    }

    get investBasicsCat() {
        return $('//*[contains(text(),"Investment-Basics")][@class="category__title"]')
    }

    get investBasicsCat_de() {
        return $('//*[contains(text(),"Investment-Grundlagen")][@class="category__title"]')
    }

    get finTermsCat() {
        return $('//*[contains(text(),"Financial Terms")][@class="category__title"]')
    }

    get finTermsCat_de() {
        return $('//*[contains(text(),"Finanzbegriffe")][@class="category__title"]')
    }

    get marketsCat() {
        return $('//*[contains(text(),"The Markets")][@class="category__title"]')
    }

    get marketsCat_de() {
        return $('//*[contains(text(),"Finanzmärkte")][@class="category__title"]')
    }


    get investStrategiesCat() {
        return $('//*[contains(text(),"Investment Strategies")][@class="category__title"]')
    }

    get investStrategiesCat_de() {
        return $('//*[contains(text(),"Investment Strategien")][@class="category__title"]')
    }

    get peopleCat() {
        return $('//*[contains(text(),"People")][@class="category__title"]')
    }

    get peopleCat_de() {
        return $('//*[contains(text(),"Experten")][@class="category__title"]')
    }

    get useGetquinCat() {
        return $('//*[contains(text(),"How to use getquin?")][@class="category__title"]')
    }

    get useGetquinCat_de() {
        return $('//*[contains(text(),"Wie funktioniert´s?")][@class="category__title"]')
    }

    get catHeader() {
        return $('.category-page__title')
    }

    get readNowButton() {
        return $('//button[contains(text(), "Read Now")]')
    }

    get backArrowButton() {
        return $('.back-btn__arrow')
    }

    get articleDescrip() {
        return $('.post-description__title')
    }

    get postTitle() {
        return $('h1[class*="post-title"]')
    }

    get acceptCoockiesButton() {
        return $('a[class*="CookieBar__button--yes"]')
    }

    get footer() {
        return $('.Footer__middle')
    }

    get everyImgLink() {
        return $$('//img')
    }

    scrollToEveryEl(){
        this.everyImgLink.map((element) =>
            element.scrollIntoView(0,0));

    }

    getEveryImgLinkList() {
        const list = []
        this.everyImgLink.map((element) =>
            list.push(element.getAttribute("src")));
        return list;
    }

    open() {
        browser.url(resources.learnPage);
        this.acceptCookies();
    }

}



export default new StuffPage();
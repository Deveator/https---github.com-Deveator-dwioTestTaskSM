export const gName = Math.random().toString(20).substr(2, 8);

export default class Page {

    open(path) {
        browser.url(path)
        console.log(gName);
        console.log("555");
    }
}

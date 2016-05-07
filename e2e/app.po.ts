export class Ngapp1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngapp1-app h1')).getText();
  }
}

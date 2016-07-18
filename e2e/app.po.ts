export class Angular2CrudAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-crud-app-app h1')).getText();
  }
}

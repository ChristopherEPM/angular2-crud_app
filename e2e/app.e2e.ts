import { Angular2CrudAppPage } from './app.po';

describe('angular2-crud-app App', function() {
  let page: Angular2CrudAppPage;

  beforeEach(() => {
    page = new Angular2CrudAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-crud-app works!');
  });
});

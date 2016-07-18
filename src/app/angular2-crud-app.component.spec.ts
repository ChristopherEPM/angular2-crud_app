import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2CrudAppAppComponent } from '../app/angular2-crud-app.component';

beforeEachProviders(() => [Angular2CrudAppAppComponent]);

describe('App: Angular2CrudApp', () => {
  it('should create the app',
      inject([Angular2CrudAppAppComponent], (app: Angular2CrudAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-crud-app works!\'',
      inject([Angular2CrudAppAppComponent], (app: Angular2CrudAppAppComponent) => {
    expect(app.title).toEqual('angular2-crud-app works!');
  }));
});

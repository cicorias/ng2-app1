import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ngapp1AppComponent } from '../app/ngapp1.component';

beforeEachProviders(() => [Ngapp1AppComponent]);

describe('App: Ngapp1', () => {
  it('should create the app',
      inject([Ngapp1AppComponent], (app: Ngapp1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngapp1 works!\'',
      inject([Ngapp1AppComponent], (app: Ngapp1AppComponent) => {
    expect(app.title).toEqual('ngapp1 works!');
  }));
});

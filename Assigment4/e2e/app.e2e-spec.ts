import { Assigment4Page } from './app.po';

describe('assigment4 App', function() {
  let page: Assigment4Page;

  beforeEach(() => {
    page = new Assigment4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

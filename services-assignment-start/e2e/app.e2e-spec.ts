import { ServicesAssignmentStartPage } from './app.po';

describe('services-assignment-start App', function() {
  let page: ServicesAssignmentStartPage;

  beforeEach(() => {
    page = new ServicesAssignmentStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

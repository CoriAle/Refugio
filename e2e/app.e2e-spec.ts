import { RefugioPage } from './app.po';

describe('refugio App', () => {
  let page: RefugioPage;

  beforeEach(() => {
    page = new RefugioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

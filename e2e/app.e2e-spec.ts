import { XsolvePage } from './app.po';

describe('xsolve App', () => {
  let page: XsolvePage;

  beforeEach(() => {
    page = new XsolvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

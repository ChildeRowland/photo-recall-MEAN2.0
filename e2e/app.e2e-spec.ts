import { CmExPage } from './app.po';

describe('cm-ex App', function() {
  let page: CmExPage;

  beforeEach(() => {
    page = new CmExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

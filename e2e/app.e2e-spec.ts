import { AppPage } from './app.po';

describe('ng5 Playground', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "NG5 Playground" in main app toolbar', () => {
    page.navigateTo();
    expect(page.getMainToolbarText()).toEqual('NG5 Playground');
  });
});

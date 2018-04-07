import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMainToolbarText() {
    return element(by.css('.app-content .mat-toolbar.mat-primary.mat-toolbar-single-row')).getText();
  }
}

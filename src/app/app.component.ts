import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appTitle = 'NG5 Playground';
  public navigation: [INavigationItem] = [{
    text: 'Item 1',
    url: '/item1',
  }, {
    text: 'Item 2',
    url: '/item2'
  }, {
    text: 'Item 3',
    url: '/item3'
  }, {
    text: 'Item 4',
    url: '/item4'
  }];
}

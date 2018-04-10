import {Component, HostBinding} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent  {
  @HostBinding('style') style: SafeStyle;
  constructor(sanitizer: DomSanitizer) {
    this.style = sanitizer.bypassSecurityTrustStyle('height: 100%;');
  }
}

import {Component, HostBinding, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {
  @HostBinding('style') style: SafeStyle;

  constructor(sanitizer: DomSanitizer, private router: Router) {
    this.style = sanitizer.bypassSecurityTrustStyle('height: 100%;');
  }

  ngOnInit(): void {
    this.router.navigate(['/hotels']);
  }
}

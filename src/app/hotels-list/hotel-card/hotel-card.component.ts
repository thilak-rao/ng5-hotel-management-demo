import {Component, OnInit, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // register material design icons
    iconRegistry.addSvgIcon(
      'shared-kitchen',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/kitchen.svg'));
    iconRegistry.addSvgIcon(
      'private-bath',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bath-tub.svg'));
    iconRegistry.addSvgIcon(
      'no-amenities',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sentiment_dissatisfied.svg'));
    iconRegistry.addSvgIcon(
      'city',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location_city.svg'));
  }
  ngOnInit() {
  }
}


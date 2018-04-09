import {Component, OnInit, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {HotelQuickViewComponent} from '../hotel-quick-view/hotel-quick-view.component';


@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],

})
export class HotelCardComponent implements OnInit {
  @Input() hotel: IHotel;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
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
  }

  openHotelQuickView(): void {
    this.dialog.open(HotelQuickViewComponent, {
      maxWidth: 600,
      data: this.hotel
    });
  }

  ngOnInit() {
  }
}


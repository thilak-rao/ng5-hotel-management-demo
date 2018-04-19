import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {HotelQuickViewComponent} from '../hotel-quick-view/hotel-quick-view.component';
import {DynamicModalService} from '../../dynamic-modal.service';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-hotel-card',
  providers: [DynamicModalService],
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss'],

})
export class HotelCardComponent {
  @Input() hotel: IHotel;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
              private dialog: MatDialog, private modalService: DynamicModalService) {
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
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
  }

  deleteMethod(event) {
    event.stopPropagation();
    this.modalService.open(ConfirmDeleteComponent, this.hotel);
  }

  openHotelQuickView(): void {
    this.dialog.open(HotelQuickViewComponent, {
      maxWidth: 600,
      data: this.hotel
    });
  }
}


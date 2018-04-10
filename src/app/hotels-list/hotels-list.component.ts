import { Component, OnInit, HostBinding } from '@angular/core';
import {HotelsService} from './hotels.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  @HostBinding('style') style: SafeStyle;
  hotels: IHotel[];
  title = 'Hotel Management';
  hotelSearchString = '';
  citySearchString = '';
  showPrivateBath: boolean|null = null;
  showSharedKitchen: boolean|null = null;
  sortByPrice = false;
  constructor(private hotelService: HotelsService, private sanitizer: DomSanitizer) {
    this.style = sanitizer.bypassSecurityTrustStyle('display: none');
    this.hotelService.getHotels()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
        this.style = this.sanitizer.bypassSecurityTrustStyle('display: block');
      });
  }

  private resetState(): void {
    this.hotelSearchString = '';
    this.citySearchString = '';
    this.showPrivateBath = null;
    this.showSharedKitchen = null;
  }

  ngOnInit() {
    this.hotelService.hotelObservable.subscribe(hotelName => {
      this.hotelSearchString = hotelName;
    });
    this.hotelService.cityObservable.subscribe(cityName => {
      this.citySearchString = cityName;
    });
    this.hotelService.sharedKitchenObservable.subscribe(show => {
      this.showSharedKitchen = show;
    });
    this.hotelService.privateBathObservable.subscribe(show => {
      this.showPrivateBath = show;
    });
    this.hotelService.sortObservable.subscribe(show => {
      this.sortByPrice = !this.sortByPrice;
    });
    this.hotelService.resetObservable.subscribe(value => {
      if (value) {
        this.resetState();
      }
    });
  }
}

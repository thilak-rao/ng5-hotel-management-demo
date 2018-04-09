import { Component, OnInit } from '@angular/core';
import {HotelsService} from './hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  hotels: IHotel[];
  hotelSearchString = '';
  citySearchString = '';
  showPrivateBath: boolean|null = null;
  showSharedKitchen: boolean|null = null;
  sortByPrice = false;
  constructor(private hotelService: HotelsService) {
    this.hotelService.getHotels()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
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

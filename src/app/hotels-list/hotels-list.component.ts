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
  constructor(private hotelService: HotelsService) {
    hotelService.getHotels()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
      });
  }

  ngOnInit() {
    this.hotelService.currentHotel.subscribe(hotelName => this.hotelSearchString = hotelName);
    this.hotelService.currentCity.subscribe(cityName => this.citySearchString = cityName);
  }
}

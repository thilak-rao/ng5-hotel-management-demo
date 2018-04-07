import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  private hotels;
  constructor(hotelService: HotelsService) {
    hotelService.getHotels()
      .subscribe((data) => this.hotels = data);
  }

  ngOnInit() {
  }

}

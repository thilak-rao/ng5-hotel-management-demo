import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  public hotels: IHotel[];
  constructor(hotelService: HotelsService) {
    hotelService.getHotels()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
      });
  }

  ngOnInit() {
  }

}

import {Component, HostBinding} from '@angular/core';
import {HotelsService} from './hotels.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent { // TODO: Persist state of filters in router params
  @HostBinding('style') style: SafeStyle;
  readonly title = 'Hotel Management';
  hotels: IHotel[];
  filters: IHotelFilter = {
    city: '',
    hotel: '',
    amenities: [],
    sort: [{type: 'price', descending: false}]
  };

  constructor(private hotelService: HotelsService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.style = sanitizer.bypassSecurityTrustStyle('display: none');
    this.hotelService.getHotelsList()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
        this.style = this.sanitizer.bypassSecurityTrustStyle('display: block');
      });
  }

  onFilterChange(filteredState: IHotelFilter) {
    this.filters = filteredState;
  };
}

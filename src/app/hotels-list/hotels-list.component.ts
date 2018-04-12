import {Component, OnInit, HostBinding} from '@angular/core';
import {HotelsService} from './hotels.service';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  @HostBinding('style') style: SafeStyle;
  readonly title = 'Hotel Management';
  hotels: IHotel[];
  searchHotel = '';
  searchCity = '';
  privateBath: boolean|null = null;
  sharedKitchen: boolean|null = null;
  sortBy = false;
  constructor(private hotelService: HotelsService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.style = sanitizer.bypassSecurityTrustStyle('display: none');
    this.hotelService.getHotels()
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
        this.style = this.sanitizer.bypassSecurityTrustStyle('display: block');
      });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const sharedKitchen = params.get('shared_kitchen');
      const privateBath = params.get('private_bath');
      const hotel = params.get('hotel');
      const city = params.get('city');
      const sortBy = params.get('sortBy');

      this.sharedKitchen = sharedKitchen === null ? null : sharedKitchen === 'true';
      this.privateBath = privateBath === null ? null : privateBath === 'true';
      this.searchHotel = hotel === null ? '' : hotel;
      this.searchCity = city === null ? '' : city;
      this.sortBy = sortBy === 'price' ? true : false;
    });
  }
}

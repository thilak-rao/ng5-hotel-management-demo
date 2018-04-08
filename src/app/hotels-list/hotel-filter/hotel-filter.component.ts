import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotelsService} from '../hotels.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  filterForm: FormGroup;

  constructor(fb: FormBuilder, private hotelService: HotelsService) {
    this.filterForm = fb.group({
      privateBath: true,
      sharedKitchen: true,
      searchHotel: '',
      searchCity: '',
      floatLabel: 'auto',
    });
  }

  searchHotel(hotelName: string) {
    this.hotelService.searchHotel(hotelName);
  }

  searchCity(cityName: string) {
    this.hotelService.searchCity(cityName);
  }

  onChanges(): void {
    this.filterForm.get('searchHotel').valueChanges.debounceTime(300).subscribe(name => {
      this.searchHotel(name);
    });

    this.filterForm.get('searchCity').valueChanges.debounceTime(300).subscribe(name => {
      this.searchCity(name);
    });
  }

  ngOnInit() {
    this.onChanges();
  }
}

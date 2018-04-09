import {Component, Input, AfterContentInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotelsService} from '../hotels.service';
import {MatCheckboxChange} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements AfterContentInit {
  @Input() cities: string[];
  filterForm: FormGroup;
  isDirty = false;
  filteredCities: Observable<any[]>;

  constructor(fb: FormBuilder, private hotelService: HotelsService) {
    this.filterForm = fb.group({
      searchHotel: '',
      searchCity: '',
      shared_kitchen: false,
      private_bath: false,
      floatLabel: 'auto',
    });
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
      city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onResetFilters(): void {
    this.isDirty = false;
    this.filterForm.reset();
    this.hotelService.resetFilters();
  }

  sortByPrice(): void {
    this.hotelService.sortByPrice();
  }

  checkIfFormDirty(): void {
    if (this.isDirty) {
      return;
    }
    const filterForm = this.filterForm.controls;

    for (const control in filterForm) {
      if (filterForm.hasOwnProperty(control) && filterForm[control].dirty) {
        this.isDirty = true;
        break;
      }
    }
  }

  onChanges(e: MatCheckboxChange): void {
    if (e.source.name === 'private_bath') {
      this.hotelService.onlyPrivateBath(e.checked);
    } else if (e.source.name === 'shared_kitchen') {
      this.hotelService.onlySharedKitchen(e.checked);
    }

    this.checkIfFormDirty();
  }

  ngAfterContentInit() {
    this.filteredCities = this.filterForm.controls.searchCity.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );

    this.filterForm.get('searchHotel').valueChanges.debounceTime(300).subscribe(name => {
      this.hotelService.searchHotel(name);
      this.checkIfFormDirty();
    });

    this.filterForm.get('searchCity').valueChanges.debounceTime(300).subscribe(name => {
      this.hotelService.searchCity(name);
      this.checkIfFormDirty();
    });
  }
}

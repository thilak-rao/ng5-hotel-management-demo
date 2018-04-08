import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HotelsService} from '../hotels.service';
import {MatCheckboxChange} from '@angular/material';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  filterForm: FormGroup;
  isDirty = false;

  constructor(fb: FormBuilder, private hotelService: HotelsService) {
    this.filterForm = fb.group({
      searchHotel: '',
      searchCity: '',
      shared_kitchen: false,
      private_bath: false,
      floatLabel: 'auto',
    });
  }

  onResetFilters(): void {
    this.isDirty = false;
    this.filterForm.reset();
    this.hotelService.resetFilters();
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

  onCheckboxChange(e: MatCheckboxChange): void {
    if (e.source.name === 'private_bath') {
      this.hotelService.onlyPrivateBath(e.checked);
    } else if (e.source.name === 'shared_kitchen') {
      this.hotelService.onlySharedKitchen(e.checked);
    }
    this.checkIfFormDirty();
  }

  onChanges(): void {
    this.filterForm.get('searchHotel').valueChanges.debounceTime(300).subscribe(name => {
      this.hotelService.searchHotel(name);
    });

    this.filterForm.get('searchCity').valueChanges.debounceTime(300).subscribe(name => {
      this.hotelService.searchCity(name);
    });
    this.checkIfFormDirty();
  }

  ngOnInit() {
    this.onChanges();
  }
}

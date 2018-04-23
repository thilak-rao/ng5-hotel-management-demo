import {Component, Input, AfterContentInit, OnInit, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import 'rxjs/add/operator/debounceTime';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit, AfterContentInit {
  @Input() cities: string[];
  @Input() filters: IHotelFilter;
  @Output() filterChange: EventEmitter<IHotelFilter> = new EventEmitter(true);
  filterForm: FormGroup;
  isFiltered = false;
  filteredCities: Observable<string[]>;
  // TODO: pass filtered state to parent component using EventEmitter
  constructor(private formBuilder: FormBuilder, private router: Router,
              private route: ActivatedRoute, iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    // register material design icons
    iconRegistry.addSvgIcon(
      'sort',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sort.svg'));
  }

  private checkIfFormDirty(): void {
    if (this.isFiltered) {
      return;
    }
    const filterForm = this.filterForm.controls;

    for (const control in filterForm) {
      if (filterForm.hasOwnProperty(control) && filterForm[control].dirty) {
        this.isFiltered = true;
        break;
      }
    }
  }

  filterCities(name: string): string[] { // TODO: Move this logic to Hotel List Component
    return this.cities.filter(city =>
      city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onResetFilters(): void { // TODO: Refactor onResetFilters into onApplyFilters.
    this.isFiltered = false;
    this.filterForm.reset();
    this.router.navigate(['/hotels']);
  }

  togglePriceSort(): void {
    this.filterForm.controls.sortByPrice.setValue(!this.filterForm.controls.sortByPrice.value);
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      hotel: this.filters.hotel,
      city: this.filters.city,
      sharedKitchen: null,
      privateBath: null,
      sortByPrice: true // TODO: Set default sort options in HotelFilters
    });

    this.filters.amenities.forEach((amenity: Amenities) => {
      if (amenity === 'private_bath') {
        this.filterForm.controls.privateBath.setValue(true);
      }

      if (amenity === 'shared_kitchen') {
        this.filterForm.controls.sharedKitchen.setValue(true);
      }
    });

    // Subscribe to user input on filter form
    this.filterForm.valueChanges.debounceTime(300).subscribe(val => {
      const amenities: Amenities[] = [];
      const sort: ISortFilter[] = [];

      if (val['sharedKitchen']) {
        amenities.push('shared_kitchen');
      }

      if (val['privateBath']) {
        amenities.push('private_bath');
      }

      if (val['sortByPrice']) {
        sort.push({
          type: 'price',
          descending: val.sortByPrice
        });
      }

      // Emit changes back to parent component
      this.filterChange.emit({
        city: val.city,
        hotel: val.hotel,
        amenities,
        sort
      });
    });
  }

  ngAfterContentInit(): void {
    this.filteredCities = this.filterForm.controls.city.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );
  }
}

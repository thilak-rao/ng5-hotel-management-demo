import {Component, Input, AfterContentInit, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit, AfterContentInit {
  @Input() cities: string[];
  filterForm: FormGroup;
  isFiltered = false;
  filteredCities: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
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

  filterCities(name: string): string[] {
    return this.cities.filter(city =>
      city.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onResetFilters(): void { // TODO: Refactor onResetFilters into onApplyFilters.
    this.isFiltered = false;
    this.filterForm.reset();
    this.router.navigate(['/hotels']);
  }

  togglePriceSort(): void {
    switch (this.filterForm.controls.sortBy.value) {
      case null:
        this.filterForm.controls.sortBy.setValue('price');
        break;
      default:
        this.filterForm.controls.sortBy.setValue(null);
        break;
    }
  }

  changeRoute(formValue): void {
    const queryParams = {};

    Object.keys(formValue).forEach(param => {
      if (formValue[param] === '') {
        queryParams[param] = null;
      } else {
        queryParams[param] = formValue[param];
      }
    });
    this.router.navigate(['/hotels'], {queryParams});

    this.checkIfFormDirty();
  }

  ngOnInit(): void {
    let paramsLoaded = false;

    this.filterForm = this.formBuilder.group({
      hotel: '',
      city: '',
      shared_kitchen: null,
      private_bath: null,
      sortBy: null
    });

    this.filterForm.valueChanges.debounceTime(300).subscribe(val => this.changeRoute(val));
    const subscription = this.route.queryParamMap.subscribe((params) => {
      if (paramsLoaded) {
        // URL Params already loaded
        subscription.unsubscribe();
        return;
      }

      Object.keys(this.filterForm.controls).forEach(param => {
        const paramVal = params.get(param);
        if (paramVal !== null) {
          this.filterForm.controls[param].setValue(params.get(param));
          this.isFiltered = true;
        }
      });

      paramsLoaded = true;
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

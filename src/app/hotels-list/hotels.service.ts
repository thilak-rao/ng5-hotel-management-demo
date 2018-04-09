import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HotelsService {
  private hotelSubject = new BehaviorSubject<string>('');
  private citySubject = new BehaviorSubject<string>('');
  private sharedKitchenSubject = new BehaviorSubject<boolean|null>(null);
  private privateBathSubject = new BehaviorSubject<boolean|null>(null);
  private sortSubject = new BehaviorSubject<boolean>(false);
  private resetSubject = new BehaviorSubject<boolean>(false);

  hotelObservable = this.hotelSubject.asObservable();
  cityObservable = this.citySubject.asObservable();
  sharedKitchenObservable = this.sharedKitchenSubject.asObservable();
  privateBathObservable = this.privateBathSubject.asObservable();
  sortObservable = this.sortSubject.asObservable();
  resetObservable = this.resetSubject.asObservable();


  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get(environment.services.hotels);
  }

  searchHotel(hotelName: string) {
    this.hotelSubject.next(hotelName);
  }

  searchCity(cityName: string) {
    this.citySubject.next(cityName);
  }

  onlySharedKitchen(show: boolean|null) {
    this.sharedKitchenSubject.next(show);
  }

  onlyPrivateBath(show: boolean|null) {
    this.privateBathSubject.next(show);
  }

  sortByPrice(): void {
    this.sortSubject.next(true);
  }

  resetFilters(): void {
    this.resetSubject.next(true);
  }
}

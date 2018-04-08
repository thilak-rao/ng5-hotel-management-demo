import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HotelsService {
  private hotelSource = new BehaviorSubject<string>('');
  private citySource = new BehaviorSubject<string>('');
  currentHotel = this.hotelSource.asObservable();
  currentCity = this.citySource.asObservable();

  constructor(private http: HttpClient) { }
  getHotels() {
    return this.http.get(environment.services.hotels);
  }

  searchHotel(hotelName: string) {
    this.hotelSource.next(hotelName);
  }

  searchCity(cityName: string) {
    this.citySource.next(cityName);
  }
}

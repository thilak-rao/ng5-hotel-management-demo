import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelsService {
  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get(environment.services.hotels);
  }
}

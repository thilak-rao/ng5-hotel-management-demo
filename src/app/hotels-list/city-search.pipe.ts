import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citySearch'
})
export class CitySearchPipe implements PipeTransform {
  transform(hotels: IHotel[], cityName: string): IHotel[] {
    if (!hotels) {
      return [];
    }

    if (!cityName) {
      return hotels;
    }

    cityName = cityName.toLowerCase();

    return hotels.filter( hotel => {
      return hotel.city.toLowerCase().includes(cityName);
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelSearch'
})
export class HotelSearchPipe implements PipeTransform {
  transform(hotels: IHotel[], hotelName: string): IHotel[] {
    if (!hotels) {
      return [];
    }

    if (!hotelName) {
      return hotels;
    }

    hotelName = hotelName.toLowerCase();

    return hotels.filter( hotel => {
      return hotel.name.toLowerCase().includes(hotelName);
    });
  }
}

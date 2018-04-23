import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform { // TODO: Implement sorting by price in Hotel Filter Pipe
  transform(hotels: IHotel[], filters: IHotelFilter): IHotel[] { // TODO: Add error handling for malformed IHotelFilter
    if (!hotels) {
      return null;
    }

    return hotels.filter((hotel: IHotel) => { // TODO: Improve runtime complexity of this filter
      let shouldFilter = true;
      if (filters.hotel !== '' && !hotel.name.includes(filters.hotel)) {
        shouldFilter = false;
      }

      if (filters.city !== '' && !hotel.city.includes(filters.city)) {
        shouldFilter = false;
      }

      filters.amenities.forEach((amenity: Amenities) => {
        if (amenity === 'private_bath' && !hotel.amenities.private_bath) {
          shouldFilter = false;
        }

        if (amenity === 'shared_kitchen' && !hotel.amenities.shared_kitchen) {
          shouldFilter = false;
        }
      });

      return shouldFilter;
    });
  }
}

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {environment} from '../../environments/environment';
import {HotelsService} from './hotels.service';

describe('HotelsService', () => {
  let hotelService: HotelsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsService],
      imports: [HttpClientTestingModule]
    });

    hotelService = TestBed.get(HotelsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });


  it('getHotelsList works', () => {
    const testHotelsList: IHotel[] = [{
      id: 'c90b30dc-5f26-479c-a677-09beb3fc2cfb',
      name: 'Mandarin Oriental',
      city: 'Chicago',
      rate: {
        price: 1706,
        code: 'USD'
      },
      rooms: [
        'Superior Double or Twin Room',
        'Two-Bedroom Suite with City View',
        'Junior Suite',
        'King Room - Ground Level'
      ],
      thumbnail: 'https://via.placeholder.com/160x120',
      cover_photo: 'https://via.placeholder.com/800x600',
      amenities: {
        private_bath: false,
        shared_kitchen: false,
        bathtub: true,
        shower: false,
        elevator: true,
        non_smoking: false
      }
    }, {
      id: 'a0c8dd2a-e1e4-423a-ad47-17c573638502',
      name: 'Clift',
      city: 'Los Angeles',
      rate: {
        price: 1980,
        code: 'USD'
      },
      rooms: [
        'Suite with City View',
        'Two-Bedroom Suite with City View',
        'Junior Suite'
      ],
      thumbnail: 'https://via.placeholder.com/160x120',
      cover_photo: 'https://via.placeholder.com/800x600',
      amenities: {
        private_bath: false,
        shared_kitchen: true,
        bathtub: true,
        shower: true,
        elevator: false,
        non_smoking: true
      }
    }, {
      id: '442df36e-d30c-4af4-987d-934323fce9c2',
      name: 'The Red Victorian',
      city: 'New York',
      rate: {
        price: 3212,
        code: 'USD'
      },
      rooms: [
        'Superior Double or Twin Room',
        'Junior Suite'
      ],
      thumbnail: 'https://via.placeholder.com/160x120',
      cover_photo: 'https://via.placeholder.com/800x600',
      amenities: {
        private_bath: true,
        shared_kitchen: true,
        bathtub: false,
        shower: false,
        elevator: true,
        non_smoking: false
      }
    }, {
      id: '0ca27555-59f5-427f-bb8f-e48dbd5234d0',
      name: 'JW Marriott',
      city: 'San Diego',
      rate: {
        price: 2462,
        code: 'USD'
      },
      rooms: [
        'Standard King Room',
        'Superior Single Room',
        'Two-Bedroom Suite with City View',
        'Premium Double or Twin Room'
      ],
      thumbnail: 'https://via.placeholder.com/160x120',
      cover_photo: 'https://via.placeholder.com/800x600',
      amenities: {
        private_bath: false,
        shared_kitchen: false,
        bathtub: false,
        shower: false,
        elevator: true,
        non_smoking: true
      }
    }, {
      id: '5261c097-f899-4ad4-ad41-c6634fcabae3',
      name: 'Stanford Court Hotel',
      city: 'Dallas',
      rate: {
        price: 3013,
        code: 'USD'
      },
      rooms: [
        'Premium Double or Twin Room',
        'Junior Suite',
        'Two-Bedroom Suite with City View'
      ],
      thumbnail: 'https://via.placeholder.com/160x120',
      cover_photo: 'https://via.placeholder.com/800x600',
      amenities: {
        private_bath: true,
        shared_kitchen: true,
        bathtub: true,
        shower: false,
        elevator: false,
        non_smoking: true
      }
    }];

    hotelService.getHotelsList().subscribe(data =>
      expect(data).toEqual(testHotelsList)
    );

    const request = httpTestingController.expectOne(environment.services.hotelsList);
    expect(request.request.method).toEqual('GET');
    request.flush(testHotelsList);
    httpTestingController.verify();
  });
});

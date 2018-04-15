import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HotelCardComponent} from './hotel-card.component';
import {HotelQuickViewComponent} from '../hotel-quick-view/hotel-quick-view.component';
import {NgPipesModule} from 'ngx-pipes';
import {HotelsListComponent} from '../hotels-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HotelFilterComponent} from '../hotel-filter/hotel-filter.component';
import {CurrencyPipe} from '@angular/common';
import {MaterialModule} from '../../material.module';

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;
  let debugElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelCardComponent, HotelQuickViewComponent, HotelsListComponent, HotelFilterComponent],
      imports: [NgPipesModule, ReactiveFormsModule, HttpClientModule, MaterialModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    component.hotel = {
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
        private_bath: true,
        shared_kitchen: false,
        bathtub: true,
        shower: false,
        elevator: true,
        non_smoking: false
      }
    };
    debugElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create hotel card', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    expect(debugElement.querySelector('mat-card-title').textContent).toContain(component.hotel.name);
  });

  it('should contain city', () => {
    expect(debugElement.querySelector('.hotelcard__city').textContent).toContain(component.hotel.city);
  });

  it('should contain formatted currency', () => {
    const currencyPipe = new CurrencyPipe('en-US');
    const formattedCurrency = currencyPipe.transform(component.hotel.rate.price, component.hotel.rate.code, 'symbol');
    expect(debugElement.querySelector('.hotelcard__rate').textContent).toContain(formattedCurrency);
  });

  it('should contain amenities', () => {
    expect(debugElement.querySelector('.hotelcard__list li').textContent).toContain('Private Bath');
  });
});

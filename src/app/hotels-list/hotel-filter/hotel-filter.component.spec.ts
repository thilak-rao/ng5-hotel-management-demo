import {async, tick, fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HotelFilterComponent} from './hotel-filter.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {HotelsListComponent} from '../hotels-list.component';
import {NgPipesModule} from 'ngx-pipes';
import {HotelCardComponent} from '../hotel-card/hotel-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import {ActivatedRouteStub} from '../../../testing/router-stubs';
import {ActivatedRoute, Router} from '@angular/router';

describe('HotelFilterComponent: route params on load', () => {
  let component: HotelFilterComponent;
  let fixture: ComponentFixture<HotelFilterComponent>;
  let activatedRoute: ActivatedRouteStub;
  const mock = {hotel: 'Ambassador Hotel', city: 'Dallas', shared_kitchen: true, private_bath: true, sortBy: 'price'};
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelFilterComponent, HotelsListComponent, HotelCardComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, NgPipesModule, BrowserAnimationsModule, MaterialModule],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useValue: router}
      ]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(HotelFilterComponent);
    component = fixture.componentInstance;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    activatedRoute.testQueryParamMap = mock;
    component.cities = ['Dallas', 'San Diego', 'New York', 'Los Angeles', 'Chicago'];

    fixture.detectChanges();
    tick(300);
  }));

  it('should create hotel filter component', () => {
    expect(component).toBeTruthy();
  });


  it('should persists state from route parameters on load', fakeAsync(() => {
    expect(component.filterForm.value.city).toBe(mock.city);
    expect(component.filterForm.value.hotel).toBe(mock.hotel);
    expect(component.filterForm.value.private_bath).toBe(mock.private_bath);
    expect(component.filterForm.value.shared_kitchen).toBe(mock.shared_kitchen);
    expect(component.filterForm.value.sortBy).toBe(mock.sortBy);
  }));
});

describe('HotelFilterComponent: user input', () => {
  let component: HotelFilterComponent;
  let fixture: ComponentFixture<HotelFilterComponent>;
  let htmlElement: HTMLElement;
  const mock = {hotel: 'Ambassador Hotel', city: 'Dallas', shared_kitchen: true, private_bath: true, sortBy: 'price'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelFilterComponent, HotelsListComponent, HotelCardComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, NgPipesModule, BrowserAnimationsModule, MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(HotelFilterComponent);
    htmlElement = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    component.cities = ['Dallas', 'San Diego', 'New York', 'Los Angeles', 'Chicago'];

    spyOn(component, 'changeRoute');
    fixture.detectChanges();

    Object.keys(mock).forEach(param => {
      component.filterForm.controls[param].setValue(mock[param]);
    });

    tick(300);
  }));

  it('should persists state in route params on user input', fakeAsync(() => {
    expect(component.changeRoute).toHaveBeenCalledWith(jasmine.objectContaining(mock));
  }));
});

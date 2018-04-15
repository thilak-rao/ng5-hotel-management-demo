import {async, fakeAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppLoaderComponent} from './app-loader.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';
import {HotelsListComponent} from '../hotels-list/hotels-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import {HttpClientModule} from '@angular/common/http';
import {HotelFilterComponent} from '../hotels-list/hotel-filter/hotel-filter.component';
import {HotelCardComponent} from '../hotels-list/hotel-card/hotel-card.component';
import {MaterialModule} from '../material.module';

describe('AppLoaderComponent', () => {
  let component: AppLoaderComponent;
  let fixture: ComponentFixture<AppLoaderComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLoaderComponent, HotelsListComponent, HotelFilterComponent, HotelCardComponent],
      imports: [RouterTestingModule.withRoutes([
        {path: 'hotels', component: HotelsListComponent}
      ]), NgPipesModule, ReactiveFormsModule, HttpClientModule, MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app loader', () => {
    expect(component).toBeTruthy();
  });

  it('app loader navigates from "" to /hotels on ngInit', fakeAsync(() => {
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/hotels');
    });
  }));
});

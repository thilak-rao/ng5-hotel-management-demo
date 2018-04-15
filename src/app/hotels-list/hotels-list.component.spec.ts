import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HotelsListComponent} from './hotels-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgPipesModule} from 'ngx-pipes';
import {HotelFilterComponent} from './hotel-filter/hotel-filter.component';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HotelsService} from './hotels.service';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material.module';

describe('HotelsListComponent', () => {
  let component: HotelsListComponent;
  let fixture: ComponentFixture<HotelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsListComponent, HotelFilterComponent, HotelCardComponent],
      providers: [HotelsService],
      imports: [RouterTestingModule, NgPipesModule, ReactiveFormsModule, HttpClientModule, MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelQuickViewComponent } from './hotel-quick-view.component';

describe('HotelQuickViewComponent', () => {
  let component: HotelQuickViewComponent;
  let fixture: ComponentFixture<HotelQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

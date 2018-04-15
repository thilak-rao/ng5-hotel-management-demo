import {async, inject, TestBed} from '@angular/core/testing';
import {HotelQuickViewComponent} from './hotel-quick-view.component';
import {
  MatDialog,
} from '@angular/material';
import {NgPipesModule} from 'ngx-pipes';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {OverlayContainer} from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';

describe('HotelQuickViewComponent', () => {
  let dialog: MatDialog;
  let overlayContainer: OverlayContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelQuickViewComponent],
      imports: [NgPipesModule, BrowserAnimationsModule, MaterialModule],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [HotelQuickViewComponent]
        }
      })
      .compileComponents();
  }));

  beforeEach(inject([MatDialog, OverlayContainer],
    (d: MatDialog, oc: OverlayContainer) => {
      dialog = d;
      overlayContainer = oc;
    })
  );

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should open a dialog with HotelQuickViewComponent', () => {
    const dialogRef = dialog.open(HotelQuickViewComponent, {
      maxWidth: 600,
      data: {
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
      }
    });

    expect(dialogRef.componentInstance instanceof HotelQuickViewComponent).toBe(true);
  });
});

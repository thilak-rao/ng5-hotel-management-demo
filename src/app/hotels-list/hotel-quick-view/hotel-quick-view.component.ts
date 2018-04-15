import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-hotel-quick-view',
  templateUrl: './hotel-quick-view.component.html',
  styleUrls: ['./hotel-quick-view.component.scss']
})
export class HotelQuickViewComponent {
  public hotel: IHotel;
  public amenities: string[] = [];
  public isImageLoaded = false;

  constructor(private dialogRef: MatDialogRef<HotelQuickViewComponent>, @Inject(MAT_DIALOG_DATA) data: IHotel) {
    this.hotel = data;

    Object.keys(this.hotel.amenities).forEach(amenity => {
      amenity = amenity.split('_').join(' ');
      this.amenities.push(amenity);
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }
}

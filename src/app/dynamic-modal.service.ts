import {Injectable, Type, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Injectable()
export class DynamicModalService {
  id: number;
  childComponent: Type<any>;
  data: object;

  constructor(private dialog: MatDialog) {
    this.id = Math.random() * 100; // just for testing
  }

  open(component: Type<any>, data: object, maxWidth: number = 600) {
    if (!component) {
      throw new Error('Modal Service needs a component to open');
    }

    if (!data) {
      throw new Error('Modal Service needs data to open');
    }

    this.childComponent = component;
    this.data = data;

    this.dialog.open(component, {
      maxWidth: maxWidth,
      data: this.data
    });
  }

  close() {
    console.log('Close Method Called', this.id, this.data);
  }
}

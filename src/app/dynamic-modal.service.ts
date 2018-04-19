import {Injectable, Type} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DynamicModalBaseComponent} from './dynamic-modal/dynamic-modal-base.component';


@Injectable()
export class DynamicModalService {
  readonly id: number;
  private childComponent: Type<any>;
  private data: object;
  private promise: Promise<boolean>; // TODO: Refactor Promise and use Subject instead

  constructor(private dialog: MatDialog) {
  }

  open(component: Type<any>, data: any, maxWidth: number = 600) {
    this.promise = new Promise((resolve, reject) => {
      if (!component) {
        reject(new Error('DynamicModalService needs a component to open'));
      }

      if (!data) {
        reject(new Error('DynamicModalService needs data to open'));
      }

      this.childComponent = component;
      this.data = data;

      const dialogRef: MatDialogRef<DynamicModalBaseComponent> = this.dialog.open(DynamicModalBaseComponent, {
        maxWidth: maxWidth,
        data: {
          component: this.childComponent,
          data: this.data
        }
      });

      let hasUserConfirmed = false;
      dialogRef.componentInstance.comfirm.subscribe(confirmation => hasUserConfirmed = confirmation);
      dialogRef.afterClosed().subscribe(() => resolve(hasUserConfirmed));
    });

    return this.promise;
  }

  close() {
    // TODO: complete `close` method
    console.log('Close Method Called', this.id, this.data);
  }
}

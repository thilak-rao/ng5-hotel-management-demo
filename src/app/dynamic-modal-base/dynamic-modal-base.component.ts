import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ViewContainerRefDirective} from '../view-container-ref.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './dynamic-modal-base.component.html',
  styleUrls: ['./dynamic-modal-base.component.scss']
})
export class DynamicModalBaseComponent implements OnInit {
  @Output() comfirm: EventEmitter<boolean> = new EventEmitter(true);
  @ViewChild(ViewContainerRefDirective) appViewContainerRef: ViewContainerRefDirective;

  constructor(private dialogRef: MatDialogRef<DynamicModalBaseComponent>,
              @Inject(MAT_DIALOG_DATA) private store: any,
              private componentFactoryResolver: ComponentFactoryResolver) {

  }

  private loadChildComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.store.component);
    const viewContainerRef = this.appViewContainerRef.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).data = this.store.data;
  }

  onCloseButtonClick(): void {
    this.comfirm.emit(false);
  }

  onConfirmButtonClick(): void {
    this.comfirm.emit(true);
  }

  ngOnInit(): void {
    this.loadChildComponent();
  }
}

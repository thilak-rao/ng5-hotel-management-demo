import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicModalBaseComponent} from './dynamic-modal-base.component';

describe('DynamicModalBaseComponent', () => {
  let component: DynamicModalBaseComponent;
  let fixture: ComponentFixture<DynamicModalBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicModalBaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicModalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

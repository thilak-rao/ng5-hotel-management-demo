import {TestBed, inject} from '@angular/core/testing';

import {DynamicModalService} from './dynamic-modal.service';
import {MatDialog} from '@angular/material';
import {MaterialModule} from './material.module';

describe('DynamicModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicModalService, MatDialog],
      imports: [MaterialModule]
    });
  });

  it('should be created', inject([DynamicModalService], (service: DynamicModalService) => {
    expect(service).toBeTruthy();
  }));
});

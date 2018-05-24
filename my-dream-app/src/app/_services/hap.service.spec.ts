import { TestBed, inject } from '@angular/core/testing';

import { HapService } from './hap.service';

describe('BarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HapService]
    });
  });

  it('should be created', inject([HapService], (service: HapService) => {
    expect(service).toBeTruthy();
  }));
});

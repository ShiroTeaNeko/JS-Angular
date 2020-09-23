import { TestBed } from '@angular/core/testing';

import { FestkickService } from './festkick.service';

describe('FestkickService', () => {
  let service: FestkickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestkickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

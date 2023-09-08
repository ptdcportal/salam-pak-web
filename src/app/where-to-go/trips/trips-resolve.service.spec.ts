import { TestBed } from '@angular/core/testing';

import { TripsResolveService } from './trips-resolve.service';

describe('TripsResolveService', () => {
  let service: TripsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

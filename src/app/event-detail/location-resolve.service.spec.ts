import { TestBed } from '@angular/core/testing';

import { LocationResolveService } from './location-resolve.service';

describe('LocationResolveService', () => {
  let service: LocationResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TripDetailResolveService } from '../../services/resolver-services/trip-detail-resolve.service';

describe('TripDetailResolveService', () => {
  let service: TripDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

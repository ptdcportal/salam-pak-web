import { TestBed } from '@angular/core/testing';

import { AccomodationDetailResolveService } from './accomodation-detail-resolve.service';

describe('AccomodationDetailResolveService', () => {
  let service: AccomodationDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomodationDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

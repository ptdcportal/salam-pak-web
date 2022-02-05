import { TestBed } from '@angular/core/testing';

import { AccomodationCategoryResolveService } from './accomodation-category-resolve.service';

describe('AccomodationCategoryResolveService', () => {
  let service: AccomodationCategoryResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccomodationCategoryResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

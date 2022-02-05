import { TestBed } from '@angular/core/testing';

import { ActivityResolveService } from './activity-resolve.service';

describe('ActivityResolveService', () => {
  let service: ActivityResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

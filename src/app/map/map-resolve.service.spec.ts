import { TestBed } from '@angular/core/testing';

import { MapResolveService } from '../services/resolver-services/map-resolve.service';

describe('MapResolveService', () => {
  let service: MapResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

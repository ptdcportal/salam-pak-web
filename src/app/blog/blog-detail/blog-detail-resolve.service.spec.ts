import { TestBed } from '@angular/core/testing';

import { BlogDetailResolveService } from '../../services/resolver-services/blog-detail-resolve.service';

describe('BlogDetailResolveService', () => {
  let service: BlogDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

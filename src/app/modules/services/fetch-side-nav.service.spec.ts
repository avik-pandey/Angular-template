import { TestBed } from '@angular/core/testing';

import { FetchSideNavService } from './fetch-side-nav.service';

describe('FetchSideNavService', () => {
  let service: FetchSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SuggestedBuildService } from './suggested-build.service';

describe('SuggestedBuildService', () => {
  let service: SuggestedBuildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestedBuildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

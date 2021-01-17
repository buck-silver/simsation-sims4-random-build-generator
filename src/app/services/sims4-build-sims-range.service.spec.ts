import { TestBed } from '@angular/core/testing';

import { Sims4BuildSimsRangeService } from './sims4-build-sims-range.service';

describe('Sims4BuildSimsRangeService', () => {
  let service: Sims4BuildSimsRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSimsRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

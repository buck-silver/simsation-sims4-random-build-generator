import { TestBed } from '@angular/core/testing';

import { Sims4BuildSimoleonRangeService } from './sims4-build-simoleon-range.service';

describe('Sims4BuildSimoleonRangeService', () => {
  let service: Sims4BuildSimoleonRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSimoleonRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

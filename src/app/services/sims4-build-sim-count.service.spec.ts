import { TestBed } from '@angular/core/testing';

import { Sims4BuildSimCountService } from './sims4-build-sim-count.service';

describe('Sims4BuildSimCountService', () => {
  let service: Sims4BuildSimCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSimCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

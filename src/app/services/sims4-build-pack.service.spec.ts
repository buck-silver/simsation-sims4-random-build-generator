import { TestBed } from '@angular/core/testing';

import { Sims4PackListService } from './sims4-build-pack.service';

describe('Sims4PackListService', () => {
  let service: Sims4PackListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4PackListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

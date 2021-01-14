import { TestBed } from '@angular/core/testing';

import { Sims4BuildWorldService } from './sims4-build-world.service';

describe('Sims4BuildWorldService', () => {
  let service: Sims4BuildWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

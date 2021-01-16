import { TestBed } from '@angular/core/testing';

import { Sims4BuildLotTraitService } from './sims4-build-lot-trait.service';

describe('Sims4BuildLotTraitService', () => {
  let service: Sims4BuildLotTraitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildLotTraitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

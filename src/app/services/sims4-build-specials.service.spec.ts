import { TestBed } from '@angular/core/testing';

import { Sims4BuildSpecialsService } from './sims4-build-specials.service';

describe('Sims4BuildSpecialsService', () => {
  let service: Sims4BuildSpecialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSpecialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

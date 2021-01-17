import { TestBed } from '@angular/core/testing';

import { Sims4BuildPackService } from './sims4-build-pack.service';

describe('Sims4BuildPackService', () => {
  let service: Sims4BuildPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

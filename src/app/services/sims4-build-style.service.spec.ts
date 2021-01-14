import { TestBed } from '@angular/core/testing';

import { Sims4BuildStyleService } from './sims4-build-style.service';

describe('Sims4BuildStyleService', () => {
  let service: Sims4BuildStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

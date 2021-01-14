import { TestBed } from '@angular/core/testing';

import { Sims4BuildColorSchemeService } from './sims4-build-color-scheme.service';

describe('Sims4BuildColorSchemeService', () => {
  let service: Sims4BuildColorSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildColorSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

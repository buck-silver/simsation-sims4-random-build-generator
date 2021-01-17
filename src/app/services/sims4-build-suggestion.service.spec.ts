import { TestBed } from '@angular/core/testing';

import { Sims4BuildSuggestionService } from './sims4-build-suggestion.service';

describe('Sims4BuildSuggestionService', () => {
  let service: Sims4BuildSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

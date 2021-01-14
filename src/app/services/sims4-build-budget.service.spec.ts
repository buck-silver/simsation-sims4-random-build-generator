import { TestBed } from '@angular/core/testing';

import { Sims4BuildBudgetService } from './sims4-build-budget.service';

describe('Sims4BuildBudgetService', () => {
  let service: Sims4BuildBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

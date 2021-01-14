import { TestBed } from '@angular/core/testing';

import { Sims4BuildSpecialRoomsService } from './sims4-build-special-rooms.service';

describe('Sims4BuildSpecialRoomsService', () => {
  let service: Sims4BuildSpecialRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sims4BuildSpecialRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

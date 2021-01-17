import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sims4BuildSuggestionComponent } from './sims4-build-suggestion.component';

describe('Sims4BuildSuggestionComponent', () => {
  let component: Sims4BuildSuggestionComponent;
  let fixture: ComponentFixture<Sims4BuildSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sims4BuildSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sims4BuildSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sims4MiscSettingsComponent } from './sims4-misc-settings.component';

describe('Sims4MiscSettingsComponent', () => {
  let component: Sims4MiscSettingsComponent;
  let fixture: ComponentFixture<Sims4MiscSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sims4MiscSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sims4MiscSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

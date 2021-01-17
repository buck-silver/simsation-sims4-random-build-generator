import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sims4PackSettingsComponent } from './sims4-pack-settings.component';

describe('Sims4PackSettingsComponent', () => {
  let component: Sims4PackSettingsComponent;
  let fixture: ComponentFixture<Sims4PackSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sims4PackSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sims4PackSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sims4RandomBuildGeneratorComponent } from './sims4-random-build-generator.component';

describe('Sims4RandomBuildGeneratorComponent', () => {
  let component: Sims4RandomBuildGeneratorComponent;
  let fixture: ComponentFixture<Sims4RandomBuildGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sims4RandomBuildGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sims4RandomBuildGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

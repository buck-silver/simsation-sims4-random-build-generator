import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimsationLogoComponent } from './simsation-logo.component';

describe('SimsationLogoComponent', () => {
  let component: SimsationLogoComponent;
  let fixture: ComponentFixture<SimsationLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimsationLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimsationLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

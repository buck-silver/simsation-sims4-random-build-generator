import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimsationSocialComponent } from './simsation-social.component';

describe('SimsationSocialComponent', () => {
  let component: SimsationSocialComponent;
  let fixture: ComponentFixture<SimsationSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimsationSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimsationSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

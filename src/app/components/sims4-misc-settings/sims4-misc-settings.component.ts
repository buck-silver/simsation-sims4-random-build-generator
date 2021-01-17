import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import {
  Sims4BuildBudgetService,
  MIN_SIMOLEON_RANGE,
  MAX_SIMOLEON_RANGE,
} from 'src/app/services/sims4-build-budget.service';
import {
  Sims4BuildSimCountService,
  MIN_SIM_RANGE,
  MAX_SIM_RANGE,
} from 'src/app/services/sims4-build-sim-count.service';

@Component({
  selector: 'sims4-misc-settings',
  templateUrl: './sims4-misc-settings.component.html',
  styleUrls: ['./sims4-misc-settings.component.scss'],
})
export class Sims4MiscSettingsComponent {
  constructor(
    public simCountService: Sims4BuildSimCountService,
    public simoleonRangeService: Sims4BuildBudgetService
  ) {}

  MIN_SIM_RANGE = MIN_SIM_RANGE;
  MAX_SIM_RANGE = MAX_SIM_RANGE;
  SIM_RANGE_STEP = 1;

  changeMinSimRange(change: MatSliderChange) {
    this.simCountService.min = change.value ?? this.MIN_SIM_RANGE;
  }

  changeMaxSimRange(change: MatSliderChange) {
    this.simCountService.max = change.value ?? this.MAX_SIM_RANGE;
  }

  MIN_SIMOLEON_RANGE = MIN_SIMOLEON_RANGE;
  MAX_SIMOLEON_RANGE = MAX_SIMOLEON_RANGE;
  SIMOLEON_RANGE_STEP = 5;

  changeMinSimoleonRange(change: MatSliderChange) {
    this.simoleonRangeService.min = change.value ?? this.MIN_SIMOLEON_RANGE;
  }

  changeMaxSimoleonRange(change: MatSliderChange) {
    this.simoleonRangeService.max = change.value ?? this.MAX_SIMOLEON_RANGE;
  }
}

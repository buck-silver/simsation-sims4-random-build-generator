import { Component } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import {
  Sims4BuildSimoleonRangeService,
  MIN_SIMOLEON_RANGE,
  MAX_SIMOLEON_RANGE,
} from 'src/app/services/sims4-build-simoleon-range.service';
import {
  Sims4BuildSimsRangeService,
  MIN_SIM_RANGE,
  MAX_SIM_RANGE,
} from 'src/app/services/sims4-build-sims-range.service';
import {
  Sims4BuildSpecialsService,
  MIN_SPECIAL_RANGE,
  MAX_SPECIAL_RANGE,
} from 'src/app/services/sims4-build-specials.service';

@Component({
  selector: 'sims4-misc-settings',
  templateUrl: './sims4-misc-settings.component.html',
  styleUrls: ['./sims4-misc-settings.component.scss'],
})
export class Sims4MiscSettingsComponent {
  constructor(
    public specialService: Sims4BuildSpecialsService,
    public simService: Sims4BuildSimsRangeService,
    public simoleonService: Sims4BuildSimoleonRangeService
  ) {}

  MIN_SPECIALS_RANGE = MIN_SPECIAL_RANGE;
  MAX_SPECIALS_RANGE = MAX_SPECIAL_RANGE;
  SPECIAL_RANGE_STEP = 1;

  changeMinSpecialRange(change: MatSliderChange) {
    this.specialService.min = change.value ?? this.MIN_SPECIALS_RANGE;
  }

  changeMaxSpecialRange(change: MatSliderChange) {
    this.specialService.max = change.value ?? this.MAX_SPECIALS_RANGE;
  }

  MIN_SIM_RANGE = MIN_SIM_RANGE;
  MAX_SIM_RANGE = MAX_SIM_RANGE;
  SIM_RANGE_STEP = 1;

  changeMinSimRange(change: MatSliderChange) {
    this.simService.min = change.value ?? this.MIN_SIM_RANGE;
  }

  changeMaxSimRange(change: MatSliderChange) {
    this.simService.max = change.value ?? this.MAX_SIM_RANGE;
  }

  MIN_SIMOLEON_RANGE = MIN_SIMOLEON_RANGE;
  MAX_SIMOLEON_RANGE = MAX_SIMOLEON_RANGE;
  SIMOLEON_RANGE_STEP = 5;

  changeMinSimoleonRange(change: MatSliderChange) {
    this.simoleonService.min = change.value ?? this.MIN_SIMOLEON_RANGE;
  }

  changeMaxSimoleonRange(change: MatSliderChange) {
    this.simoleonService.max = change.value ?? this.MAX_SIMOLEON_RANGE;
  }
}

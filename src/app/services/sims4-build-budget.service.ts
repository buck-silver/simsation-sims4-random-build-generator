import { Injectable, Input } from '@angular/core';
import { getRandomInt } from '../util/get-random-int';

export const MIN_SIMOLEON_RANGE = 10;
export const MAX_SIMOLEON_RANGE = 100;

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildBudgetService {
  private _min = MIN_SIMOLEON_RANGE;
  get min(): number {
    return this._min;
  }
  @Input() set min(val: number) {
    val = Math.floor(val);
    if (val < MIN_SIMOLEON_RANGE) {
      throw new Error(
        `Simoleon min range cannot be set below minimum of ${MIN_SIMOLEON_RANGE}`
      );
    } else if (val > this.max) {
      throw new Error(
        `Simoleon min range cannot be set above maximum of ${this.max}`
      );
    } else {
      this._min = val;
    }
  }

  private _max = MAX_SIMOLEON_RANGE;
  get max(): number {
    return this._max;
  }
  @Input() set max(val: number) {
    val = Math.floor(val);
    if (val > MAX_SIMOLEON_RANGE) {
      throw new Error(
        `Simoleon max range cannot be set above maximum of ${MAX_SIMOLEON_RANGE}`
      );
    } else if (val < this.min) {
      throw new Error(
        `Simoleon max range cannot be set below minimum of ${this.min}`
      );
    } else {
      this._max = val;
    }
  }

  getRandom(): string {
    const rand = Math.floor(getRandomInt(this.min, this.max) + 5);
    return `${rand}K`;
  }
}

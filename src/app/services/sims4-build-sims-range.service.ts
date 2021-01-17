import { Injectable, Input } from '@angular/core';
import { getRandomInt } from '../util/get-random-int';

export const MIN_SIM_RANGE = 1;
export const MAX_SIM_RANGE = 8;

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildSimsRangeService {
  private _min = MIN_SIM_RANGE;
  get min(): number {
    return this._min;
  }
  @Input() set min(val: number) {
    val = Math.floor(val);
    if (val < MIN_SIM_RANGE) {
      throw new Error(
        `Sim min count cannot be set below minimum of ${MIN_SIM_RANGE}`
      );
    } else if (val > this.max) {
      throw new Error(
        `Sim min count cannot be set above maximum of ${this.max}`
      );
    } else {
      this._min = val;
    }
  }

  private _max = MAX_SIM_RANGE;
  get max(): number {
    return this._max;
  }
  @Input() set max(val: number) {
    val = Math.floor(val);
    if (val > MAX_SIM_RANGE) {
      throw new Error(
        `Sim max count cannot be set above maximum of ${MAX_SIM_RANGE}`
      );
    } else if (val < this.min) {
      throw new Error(
        `Sim max count cannot be set below minimum of ${this.min}`
      );
    } else {
      this._max = val;
    }
  }

  getRandom(): string {
    const range = getRandomInt(this.min, this.max);
    return `${range} ${range > 1 ? 'Sims' : 'Sim'}`;
  }
}

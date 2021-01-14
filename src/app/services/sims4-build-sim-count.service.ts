import { Injectable } from '@angular/core';
import { getRandomInt } from './get-random-int';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildSimCountService {
  simCounts: string[] = [
    '1 Sim',
    '2 Sims',
    '3 Sims',
    '4 Sims',
    '5 Sims',
    '6 Sims',
    '7 Sims',
    '8 Sims',
  ];

  getRandom(): string {
    return this.simCounts[getRandomInt(0, this.simCounts.length - 1)];
  }
}

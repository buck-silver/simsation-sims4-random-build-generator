import { Injectable } from '@angular/core';
import { getRandomInt } from './get-random-int';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildBudgetService {
  budgets: string[] = [
    '10K',
    '15K',
    '20K',
    '25K',
    '30K',
    '35K',
    '40K',
    '45K',
    '50K',
    '55K',
    '60K',
    '65K',
    '70K',
    '75K',
    '80K',
    '85K',
    '90K',
    '95K',
    '100K',
  ];

  getRandom(): string {
    return this.budgets[getRandomInt(0, this.budgets.length - 1)];
  }
}

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
    '40K',
    '50K',
    '60K',
    '70K',
    '80K',
    '90K',
    '100K',
  ];

  getRandom(): string {
    return this.budgets[getRandomInt(0, this.budgets.length - 1)];
  }
}

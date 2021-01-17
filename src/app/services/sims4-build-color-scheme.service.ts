import { Injectable } from '@angular/core';
import { getRandomInt } from '../util/get-random-int';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildColorSchemeService {
  colorSchemes: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
    'white',
    'rainbow',
  ];

  getRandom(): string {
    return this.colorSchemes[getRandomInt(0, this.colorSchemes.length - 1)];
  }
}

import { Injectable } from '@angular/core';
import { getRandomInt } from '../util/get-random-int';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildColorSchemeService {
  colorSchemes: string[] = [
    'a red',
    'an orange',
    'a yellow',
    'a green',
    'a blue',
    'an indigo',
    'a purple',
    'a pink',
    'a brown',
    'a grey',
    'a black',
    'a white',
    'a rainbow',
  ];

  getRandom(): string {
    return this.colorSchemes[getRandomInt(0, this.colorSchemes.length - 1)];
  }
}

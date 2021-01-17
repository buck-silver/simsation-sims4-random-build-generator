import { Injectable } from '@angular/core';
import { Sims4BuildPackService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

class StyleCondition {
  constructor(public pack: string = '', public styles: string[] = []) {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildStyleService {
  constructor(sims4packs: Sims4BuildPackService) {
    sims4packs.packs.subscribe((val) => {
      const updatedTraits = [];
      for (const condition of this.stylesWithConditions) {
        if (val.get(condition.pack)?.enabled == true) {
          for (const trait of condition.styles) {
            updatedTraits.push(trait);
          }
        }
      }
      this.styles = [...updatedTraits, ...this.baseStyles];
    });
  }

  styles: string[] = [];

  private baseStyles: string[] = [
    'Adobe House',
    'A-Frame House',
    'All Glass House',
    'Apartment',
    'Art Deco House',
    'Beach House',
    'British Farmhouse',
    'Cape Cod Bungalow',
    'Castle',
    'Colonial House',
    'Cottage',
    'Craftsman House',
    'Duplex',
    'Dutch Colonial House',
    'Gothic Victorian House',
    'Lighthouse',
    'Log Cabin',
    'Mansion',
    'Mediterranean House',
    'Micro 32-tile House',
    'Mid-century Modern House',
    'Modern House',
    'Modern Farmhouse',
    'Penthouse',
    'Ranch Bungalow',
    'Rental House',
    'Shack',
    'Shipping Container House',
    'Small 100-tile House',
    'Suburban House',
    'Tiny 64-tile House',
    'Trailer or Trailer Park',
    'Treehouse',
    'Tudor House',
    'Underground Bunker',
    'Victorian House',
    'Victorian Row House',
    'Suburban Townhouse',
    'Rustic Country House',
    'Italianate House',
  ];

  private stylesWithConditions: StyleCondition[] = [
    new StyleCondition('Snowy Escape', ['Traditional Japanese House']),
    new StyleCondition('Eco Lifestyle', ['Eco Friendly House']),
    new StyleCondition('Paranormal', ['Haunted House']),
  ];

  getRandom(): string {
    return this.styles[getRandomInt(0, this.styles.length - 1)];
  }
}

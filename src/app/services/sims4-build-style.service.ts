import { Injectable } from '@angular/core';
import { getRandomInt } from './get-random-int';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildStyleService {
  buildStyles: string[] = [
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
    'Traditional Japanese House',
    'Trailer',
    'Treehouse',
    'Tudor House',
    'Underground House',
    'Victorian House',
    'Victorian Row House',
  ];

  getRandom(): string {
    return this.buildStyles[getRandomInt(0, this.buildStyles.length - 1)];
  }
}

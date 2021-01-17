import { Injectable } from '@angular/core';
import { Sims4BuildPackService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

class TraitCondition {
  constructor(public pack: string = '', public traits: string[] = []) {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildLotTraitService {
  constructor(sims4packs: Sims4BuildPackService) {
    sims4packs.packs.subscribe((val) => {
      const updatedTraits = [];
      for (const condition of this.traitsWithConditions) {
        if (val.get(condition.pack)?.enabled == true) {
          for (const trait of condition.traits) {
            updatedTraits.push(trait);
          }
        }
      }
      this.traits = [...updatedTraits, ...this.baseTraits];
    });
  }

  traits: string[] = [];

  private baseTraits: string[] = [
    'Great Acoustics',
    'Fast Internet',
    'Homey',
    'Science Lair',
    'Convivial',
    'Natural Light',
    'Bracing Breezes',
    'Private Dwelling',
    'Teen Neighborhood',
    'Off-the-Grid',
  ];

  private traitsWithConditions: TraitCondition[] = [
    new TraitCondition('Get Famous', ['Celebrity Home']),
    new TraitCondition('Island Living', [
      'Island Spirits',
      'Volcanic Activity',
    ]),
    new TraitCondition('Discover University', ['Study Spot']),
    new TraitCondition('Eco Lifestyle', [
      'Eco Lot',
      'Geothermal',
      'Natural Well',
      'Reduce and Recycle',
    ]),
    new TraitCondition('Cats & Dogs', [
      'Breeding Grounds',
      'Cat Hangout',
      'Dog Hangout',
      'Training Ground',
    ]),
    new TraitCondition('City Living', [
      "Chef's Kitchen",
      'Quake Zone',
      'Good Schools',
      'Mean Vibe',
      'Home Studio',
      'Sunny Aspect',
      'Cursed',
      'Grody',
      'Gremlins',
      'Penny Pixies',
      'Party Place',
      'Filthy',
      'Spooky',
      'Romantic Aura',
      'Great Soil',
      "Child's Play",
      'On Ley Line',
      'Gnomes',
    ]),
    new TraitCondition('Vampires', [
      'On A Dark Ley Line',
      'Registered Vampire Lair',
      'Vampire Nexus',
    ]),
    new TraitCondition('Jungle Adventure', [
      'Creepy Crawlies',
      'Peace and Quiet',
    ]),
  ];

  getRandom(): string {
    return this.traits[getRandomInt(0, this.traits.length - 1)];
  }
}

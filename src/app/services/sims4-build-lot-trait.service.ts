import { Injectable } from '@angular/core';
import { Sims4PackListService } from '../sims4-pack-settings/sims4-pack-list.service';
import { getRandomInt } from './get-random-int';

class TraitCondition {
  constructor(public pack: string = '', public traits: string[] = []) {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildLotTraitService {
  constructor(sims4packs: Sims4PackListService) {
    sims4packs.packs.subscribe((val) => {
      const updatedTraits = [];
      for (const condition of this.worldsWithConditions) {
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
    'Clothing Optional',
  ];

  private worldsWithConditions: TraitCondition[] = [
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
    new TraitCondition('Cats & Dogs', [
      'Breeding Grounds',
      'Cat Friendly',
      'Cat Hangout',
      'Dog Friendly',
      'Dog Hangout',
      'Training Ground',
    ]),
    new TraitCondition('Jungle Adventure', [
      'Creepy Crawlies',
      'Peace and Quiet',
    ]),
    new TraitCondition('Get Famous', [
      'Celebrity Home',
      'Hottest Spot in Town',
      'Up-and-Coming Hotspot',
    ]),
    new TraitCondition('Island Living', [
      'Island Spirits',
      'Volcanic Activity',
    ]),
    new TraitCondition('Discover University', [
      'Study Spot',
      'University Student Hang Out',
    ]),
    new TraitCondition('Eco Lifestyle', [
      'Eco Lot',
      'Geothermal',
      'Landfill Lot',
      'Natural Well',
      'Reduce and Recycle',
    ]),
  ];

  getRandom(): string {
    return this.traits[getRandomInt(0, this.traits.length - 1)];
  }
}

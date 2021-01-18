import { Injectable, Input } from '@angular/core';
import { Sims4BuildPackService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

export const MIN_SPECIALS_RANGE = 1;
export const MAX_SPECIALS_RANGE = 10;

class SpecialsConditions {
  constructor(public pack: string = '', public specials: string[] = []) {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildSpecialsService {
  constructor(sims4packs: Sims4BuildPackService) {
    sims4packs.packs.subscribe((val) => {
      const updatedSpecials = [];
      const duplicates = new Set<string>();

      for (const condition of this.specialsWithConditions) {
        // Check if pack is enabled
        if (val.get(condition.pack)?.enabled == true) {
          for (const special of condition.specials) {
            // If no duplicate specials have already been added, add to special list
            if (!duplicates.has(special)) {
              updatedSpecials.push(special);
              duplicates.add(special);
            }
          }
        }
      }
      this.specials = [...updatedSpecials, ...this.baseSpecials];
    });
  }

  private _min = MIN_SPECIALS_RANGE;
  get min(): number {
    return this._min;
  }
  @Input() set min(val: number) {
    val = Math.floor(val);
    if (val < MIN_SPECIALS_RANGE) {
      throw new Error(
        `Special min cannot be set below minimum of ${MIN_SPECIALS_RANGE}`
      );
    } else if (val > this.max) {
      throw new Error(`Sim min cannot be set above maximum of ${this.max}`);
    } else {
      this._min = val;
    }
  }

  private _max = MAX_SPECIALS_RANGE;
  get max(): number {
    return this._max;
  }
  @Input() set max(val: number) {
    val = Math.floor(val);
    if (val > MAX_SPECIALS_RANGE) {
      throw new Error(
        `Special max cannot be set above maximum of ${MAX_SPECIALS_RANGE}`
      );
    } else if (val < this.min) {
      throw new Error(`Special max cannot be set below minimum of ${this.min}`);
    } else {
      this._max = val;
    }
  }

  getRandomSpecial(): string {
    return this.specials[getRandomInt(0, this.specials.length - 1)];
  }

  getManyRandomSpecials(amount: number): Set<string> {
    const many = new Set<string>();
    while (many.size < amount) {
      const rand = this.getRandomSpecial();
      if (many.has(rand)) continue;
      else many.add(rand);
    }
    return many;
  }

  getFromBetweenRangeManyRandomSpecials(
    min?: number,
    max?: number
  ): Set<string> {
    min = min ?? this._min;
    max = max ?? this._max;
    if (min < this._min && max > this._max) {
      throw new Error(
        `Cannot get a number of specials outside the range of ${this._min} and ${this._max}`
      );
    }
    return this.getManyRandomSpecials(getRandomInt(min, max));
  }

  specials: string[] = [];

  private baseSpecials: string[] = [
    'Art Studio or Gallery',
    'Attic',
    'Bar',
    'Basement',
    'Cemetary or Mausoleum',
    'Coffee or Tea Machine',
    'Collectible Display',
    'Cupcake Machine',
    'Craft Room',
    'DJ or Music Room',
    'Fish Bowl or Aquarium',
    'Food & Flower Garden',
    'Fountain',
    'Fruit Trees',
    'Game Room',
    'Garage or Workshop',
    'Garden Shed',
    'Greenhouse',
    'Guest Bedroom',
    'Hidden Room',
    'Home Gym',
    'Home Theatre',
    'Hot Tub',
    'Huge Food Farm',
    'Kids Play Room',
    'Motion Gaming Rig',
    'Nursery',
    'Office',
    'Outhouse',
    'Patio with BBQ',
    'Playground Equipment',
    'Pool',
    'Rocketship',
    'Rock Garden',
    'Shrine to the Tragic Clown',
    'Skylight or Glass Roof',
    'Small Flower Garden',
    'Small Food Garden',
    'Study or Library',
    'Sun or Plant Room',
  ];

  private specialsWithConditions: SpecialsConditions[] = [
    new SpecialsConditions('Backyard', ["Slip n' Slide"]),
    new SpecialsConditions('Bowling Night', ['Bowling Alley']),
    new SpecialsConditions('Cats & Dogs', ['Cat Stuff', 'Dog Stuff']),
    new SpecialsConditions('City Living', [
      'Basketball Court',
      'Karaoke Machine',
      'Bubble Blower Machine',
    ]),
    new SpecialsConditions('Cool Kitchen', ['Ice Cream Machine']),
    new SpecialsConditions('Dine Out', ['Chef Station']),
    new SpecialsConditions('Discover University', ['Robotics Workstation']),
    new SpecialsConditions('Eco Lifestyle', ['Dumpster', 'Insect Farm']),
    new SpecialsConditions('Fitness', ['Rock Climbing Wall']),
    new SpecialsConditions('Get Famous', [
      'Money Vault',
      'Video Station',
      'Streaming Drone',
    ]),
    new SpecialsConditions('Get Together', [
      'Arcade Machine',
      'Woohoo Bush',
      'Fire Pit',
    ]),
    new SpecialsConditions('Get to Work', ['Photography Studio', 'Jail Cell']),
    new SpecialsConditions('Holiday Celebration', ['Christmas Decorations']),
    new SpecialsConditions('Island Living', ['Fire Pit']),
    new SpecialsConditions('Journey to Batuu', [
      '3 Star Wars Objects',
      'Sabacc Table',
    ]),
    new SpecialsConditions('Jungle Adventure', ['Woohoo Bush']),
    new SpecialsConditions('Kids Room', [
      'Puppet Theater',
      'Voidcritter Battle Station',
    ]),
    new SpecialsConditions('Laundry Day', ['Laundry Room']),
    new SpecialsConditions('Luxury Party', [
      'Banquet Table',
      'Fountain of Mirth',
    ]),
    new SpecialsConditions('Moschino', ['Photography Studio']),
    new SpecialsConditions('Movie Hangout', [
      'Lilacs & Lanterns Tree',
      'Popcorn Machine',
    ]),
    new SpecialsConditions('My First Pet', ['Rodent Cage']),
    new SpecialsConditions('Nifty Knitting', ['Knitting Room']),
    new SpecialsConditions('Outdoor Retreat', ['Fire Pit']),
    new SpecialsConditions('Paranormal', ['Séance Room']),
    new SpecialsConditions('Parenthood', ['Family Bulletin Board']),
    new SpecialsConditions('Perfect Patio', [
      'Perfect Patio Outdoor Living Room',
    ]),
    new SpecialsConditions('Realm of Magic', ['Cauldron Room']),
    new SpecialsConditions('Romantic Garden', ['Wishing Well']),
    new SpecialsConditions('Seasons', [
      'Kiddie Pool',
      'Patchy',
      'Bee Farm',
      'Weather Control Device',
    ]),
    new SpecialsConditions('Snowy Escape', ['Kotatsu Table', 'Zen Garden']),
    new SpecialsConditions('Spa Day', ['Massage Room', 'Sauna', 'Yoga Room']),
    new SpecialsConditions('Spooky', [
      'Pumpkin Carving Station',
      'Halloween Decorations',
    ]),
    new SpecialsConditions('Tiny Living', ['Murphy Bed']),
    new SpecialsConditions('Toddler', ['Ball Pit']),
    new SpecialsConditions('Vampires', ['Vampire Coffin Room']),
    new SpecialsConditions('Vintage Glamour', ["Butler's Bedroom", 'Vanity']),
  ];
}

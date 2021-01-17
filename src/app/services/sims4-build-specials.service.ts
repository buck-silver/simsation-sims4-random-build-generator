import { Injectable } from '@angular/core';
import { Sims4BuildPackService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

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

  specials: string[] = [];

  private baseSpecials: string[] = [
    'Art Studio or Gallery',
    'Attic',
    'Bar',
    'Basement',
    'Craft Room',
    'DJ or Music Room',
    'Food & Flower Garden',
    'Fruit Trees',
    'Game Room',
    'Garage or Workshop',
    'Garden Shed',
    'Greenhouse',
    'Guest Bedroom',
    'Home Gym',
    'Home Theatre',
    'Hot Tub',
    'Huge Food Farm',
    'Kids Play Room',
    'Office',
    'Patio with BBQ',
    'Pool',
    'Small Flower Garden',
    'Small Food Garden',
    'Sun or Plant Room',
    'Cemetary or Mausoleum',
    'Shrine to the Tragic Clown',
    'Playground Equipment',
    'Fountain',
    'Outhouse',
    'Skylight or Glass Roof',
    'Rocketship',
    'Nursery',
    'Motion Gaming Rig',
    'Cupcake Machine',
    'Coffee or Tea Machine',
  ];

  private specialsWithConditions: SpecialsConditions[] = [
    new SpecialsConditions('City Living', [
      'Basketball Court',
      'Karaoke Machine',
      'Bubble Blower Machine',
    ]),
    new SpecialsConditions('Bowling Night', ['Bowling Alley']),
    new SpecialsConditions('Spa Day', ['Massage Room', 'Sauna', 'Yoga Room']),
    new SpecialsConditions('Get Famous', [
      'Money Vault',
      'Video Station',
      'Streaming Drone',
    ]),
    new SpecialsConditions('Get Together', ['Arcade Machine', 'Woohoo Bush']),
    new SpecialsConditions('Jungle Adventure', ['Woohoo Bush']),
    new SpecialsConditions('Seasons', [
      'Kiddie Pool',
      'Patchy',
      'Bee Farm',
      'Weather Control Device',
    ]),
    new SpecialsConditions('City Living', [
      'Karaoke Machine',
      'Bubble Blower Machine',
    ]),
    new SpecialsConditions('Discover University', ['Robotics Workstation']),
    new SpecialsConditions('Eco Lifestyle', ['Dumpster', 'Insect Farm']),
    new SpecialsConditions('Snowy Escape', ['Kotatsu Table', 'Zen Garden']),
    new SpecialsConditions('Cats & Dogs', ['Pet Stuff']),
    new SpecialsConditions('My First Pet', ['Pet Stuff']),
    new SpecialsConditions('Get to Work', ['Photography Studio']),
    new SpecialsConditions('Moschino', ['Photography Studio']),
    new SpecialsConditions('Get Together', ['Fire Pit']),
    new SpecialsConditions('Island Living', ['Fire Pit']),
    new SpecialsConditions('Outdoor Retreat', ['Fire Pit']),
    new SpecialsConditions('Realm of Magic', ['Cauldron Room']),
    new SpecialsConditions('Vampires', ['Vampire Coffin Room']),
    new SpecialsConditions('Journey to Batuu', ['5 Star Wars Objects']),
    new SpecialsConditions('Parenthood', ['Family Bulletin Board']),
    new SpecialsConditions('Dine Out', ['Chef Station']),
    new SpecialsConditions('Cool Kitchen', ['Ice Cream Machine']),
    new SpecialsConditions('Fitness', ['Rock Climbing Wall']),
    new SpecialsConditions('Backyard', ["Slip n' Slide"]),
    new SpecialsConditions('Toddler', ['Ball Pit']),
    new SpecialsConditions('Laundry Day', ['Laundry Room']),
    new SpecialsConditions('Romantic Garden', ['Wishing Well']),
    new SpecialsConditions('Tiny Living', ['Murphy Bed']),
    new SpecialsConditions('Vintage Glamour', ["Butler's Bedroom"]),
    new SpecialsConditions('Perfect Patio', [
      'Perfect Patio Outdoor Living Room',
    ]),
    new SpecialsConditions('Nifty Knitting', ['Knitting Room']),
    new SpecialsConditions('Luxury Party', [
      'Banquet Table',
      'Fountain of Mirth',
    ]),
    new SpecialsConditions('Spooky', [
      'Pumpkin Carving Station',
      'Decorate for Halloween',
    ]),
    new SpecialsConditions('Movie Hangout', [
      'Lilacs & Lanterns Tree',
      'Popcorn Machine',
    ]),
    new SpecialsConditions('Kids Room', [
      'Puppet Theater',
      'Voidcritter Battle Station',
    ]),
    new SpecialsConditions('Paranormal', ['Séance Room']),
    new SpecialsConditions('Holiday Celebration', ['Decorate for Christmas']),
  ];

  getRandom(): string {
    return this.specials[getRandomInt(0, this.specials.length - 1)];
  }
}

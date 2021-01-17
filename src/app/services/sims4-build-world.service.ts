import { Injectable } from '@angular/core';
import { Sims4PackListService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

class WorldCondition {
  constructor(public pack: string = '', public world: string = '') {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildWorldService {
  constructor(sims4packs: Sims4PackListService) {
    sims4packs.packs.subscribe((val) => {
      const updatedWorlds = [];
      for (const condition of this.worldsWithConditions) {
        if (val.get(condition.pack)?.enabled == true) {
          updatedWorlds.push(condition.world);
        }
      }
      this.worlds = [...updatedWorlds, ...this.baseWorlds];
    });
  }

  worlds: string[] = [];

  private baseWorlds: string[] = ['Willow Creek', 'Oasis Springs', 'Newcrest'];

  private worldsWithConditions: WorldCondition[] = [
    new WorldCondition('Get to Work', 'Magnolia Promenade'),
    new WorldCondition('Get Together', 'Windenburg'),
    new WorldCondition('City Living', 'San Myshuno'),
    new WorldCondition('Vampires', 'Forgotten Hollow'),
    new WorldCondition('Cats & Dogs', 'Brindleton Bay'),
    new WorldCondition('Get Famous', 'Del Sol Valley'),
    new WorldCondition('StrangerVille', 'StrangerVille'),
    new WorldCondition('Island Living', 'Sulani'),
    new WorldCondition('Realm of Magic', 'Glimmerbrook'),
    new WorldCondition('Discover University', 'Britechester'),
    new WorldCondition('Eco Lifestyle', 'Evergreen Harbor'),
    new WorldCondition('Snowy Escape', 'Mt. Komorebi'),
  ];

  getRandom(): string {
    return this.worlds[getRandomInt(0, this.worlds.length - 1)];
  }
}

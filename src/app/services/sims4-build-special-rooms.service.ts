import { Injectable } from '@angular/core';
import { Sims4BuildPackService } from './sims4-build-pack.service';
import { getRandomInt } from '../util/get-random-int';

class RoomConditions {
  constructor(public pack: string = '', public room: string = '') {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildSpecialRoomsService {
  constructor(sims4packs: Sims4BuildPackService) {
    sims4packs.packs.subscribe((val) => {
      const updatedRooms = [];

      for (const condition of this.roomsWithConditions) {
        if (val.get(condition.pack)?.enabled) {
          updatedRooms.push(condition.room);
        }
      }

      this.rooms = [...updatedRooms, ...this.baseRooms];
    });
  }

  rooms: string[] = [];

  private baseRooms: string[] = [
    'an Art Studio or Gallery',
    'an Attic',
    'a Bar',
    'a Basement',
    'a Craft Room',
    'a DJ or Music Room',
    'a Food & Flower Garden',
    'Fruit Trees',
    'a Game Room',
    'a Garage or Workshop',
    'a Garden Shed',
    'a Greenhouse',
    'a Guest Bedroom',
    'a Home Gym',
    'a Home Theatre',
    'a Hot Tub',
    'a Huge Food Farm',
    'a Kids Play Room',
    'an Office',
    'a Patio with BBQ',
    'a Pool',
    'a Small Flower Garden',
    'a Small Food Garden',
    'a Sun or Plant Room',
  ];

  private roomsWithConditions: RoomConditions[] = [
    new RoomConditions('City Living', 'a Basketball Court'),
    new RoomConditions('Bowling Night', 'a Bowling Alley'),
    new RoomConditions('Spa Day', 'a Massage Room'),
    new RoomConditions('Spa Day', 'a Sauna'),
  ];

  getRandom(): string {
    return this.rooms[getRandomInt(0, this.rooms.length - 1)];
  }
}

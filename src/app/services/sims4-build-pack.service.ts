import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SIMS_4_PACKS, PackData } from './sims4-packs';

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildPackService {
  categories: Set<string> = new Set();

  packs: BehaviorSubject<Map<string, PackData>>;

  private _enabledPackList: PackData[] = [];
  get listOfEnabledPacks(): PackData[] {
    return this._enabledPackList;
  }

  constructor() {
    const m: Map<string, PackData> = new Map();
    for (const pack of SIMS_4_PACKS) {
      if (!this.categories.has(pack.category)) {
        this.categories.add(pack.category);
      }
      m.set(pack.name, pack);
    }
    this.packs = new BehaviorSubject(m);

    this.packs.subscribe((val) => this.updateListOfEnabledPacks(val));
  }

  private updateListOfEnabledPacks(updatedPacks: Map<string, PackData>) {
    const newList = [];
    const iter = updatedPacks.values();
    for (const pack of iter) {
      if (pack.enabled) {
        newList.push(pack);
      }
    }
    this._enabledPackList = newList;
  }

  togglePack(item: PackData) {
    item.enabled = !item.enabled;
    this.packs.next(this.packs.value);
  }
}

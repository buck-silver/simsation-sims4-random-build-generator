import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sims4BuildSimoleonRangeService } from './sims4-build-simoleon-range.service';
import { Sims4BuildColorSchemeService } from './sims4-build-color-scheme.service';
import { Sims4BuildLotTraitService } from './sims4-build-lot-trait.service';
import { Sims4BuildSimsRangeService } from './sims4-build-sims-range.service';
import { Sims4BuildSpecialsService } from './sims4-build-specials.service';
import { Sims4BuildStyleService } from './sims4-build-style.service';
import { Sims4BuildWorldService } from './sims4-build-world.service';

class SuggestionData {
  constructor(
    public suggestionCurrent: string = '',
    public suggestionFinal: string = '',
    public inProgress: boolean = false,
    public interval: number = 0,
    public intervalCurrent: number = 0,
    public percent: number = 0,
    public duration: number = 0
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class Sims4BuildSuggestionService {
  duration: number = 2500;

  suggestion: BehaviorSubject<SuggestionData>;

  constructor(
    private buildBudget: Sims4BuildSimoleonRangeService,
    private buildColors: Sims4BuildColorSchemeService,
    private buildSimRange: Sims4BuildSimsRangeService,
    private buiildSpecials: Sims4BuildSpecialsService,
    private buildStyles: Sims4BuildStyleService,
    private buildWorlds: Sims4BuildWorldService,
    private buildLotTraits: Sims4BuildLotTraitService
  ) {
    const sentence = this.suggestTheBuild();

    this.suggestion = new BehaviorSubject(
      new SuggestionData(sentence, sentence, false, 0, 0, 100, 0)
    );
  }

  suggest() {
    if (this.suggestion.value.inProgress) {
      console.warn(
        `Cannot make new suggestion while another is currently in progress!`
      );
      return;
    }
    const fin = this.suggestTheBuild();
    const filler = fin.replace(/([\S])/g, '\xa0');
    const interval = Math.ceil(this.duration / fin.length);

    const newSuggestion = new SuggestionData(
      filler,
      fin,
      true,
      interval,
      0,
      0,
      this.duration
    );
    this.animateTheSuggestion(newSuggestion);
  }

  private suggestTheBuild(): string {
    const budget = this.buildBudget.getRandom();
    const color = this.buildColors.getRandom();
    const sims = this.buildSimRange.getRandom();
    const style = this.buildStyles.getRandom();
    const world = this.buildWorlds.getRandom();
    const lotTrait = this.buildLotTraits.getRandom();
    const specials = this.suggestSpecials();
    return `Build ${color} ${style} in ${world} with the lot trait ❛${lotTrait}❜ for ${sims} with a budget of ${budget}.${specials}`;
  }

  private suggestSpecials(): string {
    let includes = '\n\nIt must include:';
    const specials = this.buiildSpecials.getFromBetweenRangeManyRandomSpecials();
    for (const special of specials) {
      includes += `\n\t-\t${special}`;
    }

    return includes;
  }

  private animateTheSuggestion(data: SuggestionData) {
    // Case - Animation has ended
    if (data.percent >= 100) {
      const current = data.suggestionFinal;
      const fin = data.suggestionFinal;
      const inProgress = false;
      const interval = 0;
      const intervalCurrent = 0;
      const percent = 100;
      const duration = 0;

      const next = new SuggestionData(
        current,
        fin,
        inProgress,
        interval,
        intervalCurrent,
        percent,
        duration
      );

      this.suggestion.next(next);
    }
    // Case - Continue in progress animation
    else {
      const fin = data.suggestionFinal;

      const interval = data.interval;
      const intervalCurrent = data.intervalCurrent + interval;
      const duration = data.duration;

      const progress = intervalCurrent / duration;
      const subLength = Math.floor(progress * fin.length);
      const percent = progress * 100;

      const fill1 = fin.substring(0, subLength);
      const fill2 = data.suggestionCurrent.substring(
        subLength,
        data.suggestionCurrent.length
      );
      const fill = fill1 + fill2;

      const next = new SuggestionData(
        fill,
        fin,
        true,
        interval,
        intervalCurrent,
        percent,
        duration
      );

      this.suggestion.next(next);

      setTimeout(() => this.animateTheSuggestion(next), interval);
    }
  }
}

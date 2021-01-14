import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sims4BuildBudgetService } from './sims4-build-budget.service';
import { Sims4BuildColorSchemeService } from './sims4-build-color-scheme.service';
import { Sims4BuildSimCountService } from './sims4-build-sim-count.service';
import { Sims4BuildSpecialRoomsService } from './sims4-build-special-rooms.service';
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
export class SuggestedBuildService {
  duration: number = 2500;

  suggestion: BehaviorSubject<SuggestionData>;

  constructor(
    private buildBudgetService: Sims4BuildBudgetService,
    private buildColorSchemeService: Sims4BuildColorSchemeService,
    private buildSimCountService: Sims4BuildSimCountService,
    private buiildSpecialRoomService: Sims4BuildSpecialRoomsService,
    private buildStyleService: Sims4BuildStyleService,
    private buildWorldService: Sims4BuildWorldService
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
    const interval = Math.ceil(this.duration / fin.length);
    const newSuggestion = new SuggestionData(
      '',
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
    const buildBudget = this.buildBudgetService.getRandom();
    const buildColorScheme = this.buildColorSchemeService.getRandom();
    const buildSimCount = this.buildSimCountService.getRandom();
    const buildSpecialRoom = this.buiildSpecialRoomService.getRandom();
    const buildStyle = this.buildStyleService.getRandom();
    const buildWorld = this.buildWorldService.getRandom();
    return `Build ${buildColorScheme} ${buildStyle} in ${buildWorld} for ${buildSimCount} with a budget of ${buildBudget} that includes ${buildSpecialRoom}.`;
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
      const current = data.suggestionFinal.substr(
        0,
        data.suggestionCurrent.length + 1
      );
      const fin = data.suggestionFinal;
      const inProgress = true;
      const interval = data.interval;
      const intervalCurrent = data.intervalCurrent + data.interval;
      const percent = (intervalCurrent / data.duration) * 100;
      const duration = data.duration;

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

      setTimeout(() => this.animateTheSuggestion(next), interval);
    }
  }
}

import { Component } from '@angular/core';
import { getRandomInt } from '../../util/get-random-int';
import { SuggestedBuildService } from '../../services/suggested-build.service';

@Component({
  selector: 'sims4-build-suggestion',
  templateUrl: './sims4-build-suggestion.component.html',
  styleUrls: ['./sims4-build-suggestion.component.scss'],
})
export class Sims4BuildSuggestionComponent {
  suggestion: string = '';
  thinking = '🤔';
  reaction = '';

  // prettier-ignore
  private reactions = [
		'😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
		'😋','😎','😍','😘','🥰','😚','🙂','🤗','🤩','🤨',
		'😐','😑','🙄','😏','😣','😥','😮','😯','😪','😫',
		'🥱','😛','😜','😝','😒','😓','😔','😕','🙃','🤑',
		'😲','🙁','😖','😞','😟','😤','😢','😭','😦','😧',
		'😨','😩','🤯','😬','😱','😳','🤪','😵','😠','😡',
		'🤬','🤢','🤮','🥳','🥺','🤡','🤭','💩'
	]

  constructor(private suggester: SuggestedBuildService) {
    this.suggester.suggestion.subscribe((val) => {
      this.suggestion = val.suggestionCurrent;
      if (val.inProgress) {
        this.reaction = this.thinking;
      } else {
        this.reaction = this.reactions[
          getRandomInt(0, this.reactions.length - 1)
        ];
      }
    });
  }

  makeSuggestion() {
    this.suggester.suggest();
  }

  get canSuggest(): boolean {
    return this.suggester.suggestion.value.inProgress;
  }
}
